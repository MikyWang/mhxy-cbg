"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const filter_1 = require("./filter");
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
                console.log(searchResult);
                if (searchResult.status === 2) {
                    console.log('已被IP检测，请稍后再试！');
                    return;
                }
                const reporter = new reporter_1.Reporter('813853090@qq.com', 'wangqy4534520');
                reporter.sendReport('813853090@qq.com', "厕所");
                if (page < searchResult.pager.num_end) {
                    setTimeout(() => {
                        this.searchMixPlayer(page + 1);
                    }, 5000);
                }
            });
        });
        req.on('error', (err) => {
            throw err;
        });
    }
}
exports.Search = Search;
//# sourceMappingURL=search.js.map