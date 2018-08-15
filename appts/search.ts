import https = require('https');
import { Filter } from "./filter";
import { IResult } from './interface';
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
                console.log(searchResult);
                if (searchResult.status === 2) {
                    console.log('已被IP检测，请稍后再试！');
                    return;
                }
                const reporter = new Reporter('xxx@qq.com', 'xxxx');
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