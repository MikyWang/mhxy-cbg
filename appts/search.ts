import https = require('https');
import { Directer } from './Directer';
import { Filter } from "./filter";
import { IResult } from './interface';
import { App } from './main';
import { Player } from './player';
import { Reporter } from './reporter';

export class Search {
    public searchMixPlayer(page: number) {
        const filter = new Filter();
        filter.page = page;
        const querystring = filter.toQueryString();
        const url = `https://xyq.cbg.163.com/cgi-bin/xyq_overall_search.py?` + querystring;
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
            const reporter = new Reporter(App.getConfig().smtpAccount, App.getConfig().smtpPassword);
            reporter.sendReport(url);
        });
    }
}
