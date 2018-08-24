import https = require('https');
import { Directer } from './Directer';
import { Filter } from "./filter";
import { IResult, ISearchResult } from './interface';
import { App } from './main';
import { Player } from './player';
import { Reporter } from './reporter';

export class Search {

    private resultList: ISearchResult[] = [];

    public searchMixPlayer(page: number) {
        const filter = new Filter();
        filter.page = page;
        const querystring = filter.toQueryString();
        const url = `https://xyq.cbg.163.com/cgi-bin/xyq_overall_search.py?` + querystring;
        console.log(url);
        const req = https.get(url as https.RequestOptions, (res) => {
            console.log('STATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));
            res.setEncoding('utf-8');
            let result = '';
            res.on('data', (data) => {
                result += data;
            });
            res.on('end', () => {
                const searchResult: IResult = JSON.parse(result);
                if (searchResult.status === 2) {
                    console.log('已被IP检测，请稍后再试！');
                    return;
                }
                if (page < searchResult.pager.num_end) {
                    setTimeout(() => {
                        this.searchMixPlayer(page + 1);
                    }, App.getConfig().interval);
                }
                this.VerifyResult(searchResult.equip_list, App.getConfig().expectPrice);
                if (page === searchResult.pager.num_end && this.resultList.length > 0) {
                    this.SendSearchResult();
                }
            });
        });
        req.on('error', (err) => {
            throw err;
        });
    }

    public VerifyResult(players: Player[], expPrice: number) {
        const expPlayers = players.filter((player) => Number.parseFloat(player.price) <= expPrice);
        expPlayers.forEach((expPlayer) => {
            const directer = new Directer();
            directer.init(expPlayer.serverid, expPlayer.eid, 1);
            const url = `https://xyq.cbg.163.com/equip?` + directer.toQueryString();
            this.resultList.push({ url: url, price: Number.parseFloat(expPlayer.price) });
        });
    }

    public SendSearchResult() {
        this.resultList.sort((a, b) => {
            return a.price - b.price;
        });
        const reporter = new Reporter(App.getConfig().smtpAccount, App.getConfig().smtpPassword);
        let content = '';
        this.resultList.forEach((result) => {
            content += `价格[` + result.price + `],url:` + result.url + `\n`;
        });
        reporter.sendReport(content);
    }

}
