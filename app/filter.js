"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring = require("querystring");
const main_1 = require("./main");
class Filter {
    constructor() {
        this.act = 'overall_search_role';
        this.page = 1;
        this.level_min = main_1.App.getConfig().level_min;
        this.level_max = main_1.App.getConfig().level_max;
        this.expt_fangyu = main_1.App.getConfig().expt_fangyu;
        this.expt_kangfa = main_1.App.getConfig().expt_kangfa;
        this.bb_expt_fashu = main_1.App.getConfig().bb_expt_fashu;
        this.bb_expt_gongji = main_1.App.getConfig().bb_expt_gongji;
    }
    toQueryString() {
        return querystring.stringify(this);
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map