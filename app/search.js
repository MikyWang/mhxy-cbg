"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const Directer_1 = require("./Directer");
const filter_1 = require("./filter");
const main_1 = require("./main");
const reporter_1 = require("./reporter");
class Search {
    searchMixPlayer(page) {
        const filter = new filter_1.Filter();
        filter.page = page;
        const querystring = filter.toQueryString();
        const url = `https://xyq.cbg.163.com/cgi-bin/xyq_overall_search.py?` + querystring;
        const req = https.get(url, (res) => {
            console.log('STATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));
            res.setEncoding('utf-8');
            let result = '';
            res.on('data', (data) => {
                result += data;
            });
            res.on('end', () => {
                const searchResult = JSON.parse(result);
                if (searchResult.status === 2) {
                    console.log('已被IP检测，请稍后再试！');
                    return;
                }
                if (page < searchResult.pager.num_end) {
                    setTimeout(() => {
                        this.searchMixPlayer(page + 1);
                    }, main_1.App.getConfig().interval);
                }
                this.VerifyResult(searchResult.equip_list, main_1.App.getConfig().expectPrice);
            });
        });
        req.on('error', (err) => {
            throw err;
        });
    }
    VerifyResult(players, expPrice) {
        const expPlayers = players.filter((player) => Number.parseFloat(player.price) <= expPrice);
        expPlayers.forEach((expPlayer) => {
            const directer = new Directer_1.Directer();
            directer.init(expPlayer.serverid, expPlayer.eid, 1);
            const url = `https://xyq.cbg.163.com/equip?` + directer.toQueryString();
            const reporter = new reporter_1.Reporter(main_1.App.getConfig().smtpAccount, main_1.App.getConfig().smtpPassword);
            reporter.sendReport(url);
        });
    }
}
exports.Search = Search;
//# sourceMappingURL=search.js.map