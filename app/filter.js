"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring = require("querystring");
class Filter {
    constructor() {
        this.level_min = 159;
        this.level_max = 159;
        this.expt_fangyu = 25;
        this.expt_kangfa = 25;
        this.bb_expt_gongji = 25;
        this.bb_expt_fashu = 20;
        this.act = 'overall_search_role';
        this.page = 1;
    }
    toQueryString() {
        return querystring.stringify(this);
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map