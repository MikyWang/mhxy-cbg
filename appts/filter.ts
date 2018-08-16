import querystring = require('querystring');
import { App } from './main';

export class Filter {
    public level_min: number;
    public level_max: number;
    public expt_fangyu: number;
    public expt_kangfa: number;
    public bb_expt_gongji: number;
    public bb_expt_fashu: number;
    public act: string = 'overall_search_role';
    public page: number = 1;

    constructor() {
        this.level_min = App.getConfig().level_min;
        this.level_max = App.getConfig().level_max;
        this.expt_fangyu = App.getConfig().expt_fangyu;
        this.expt_kangfa = App.getConfig().expt_kangfa;
        this.bb_expt_fashu = App.getConfig().bb_expt_fashu;
        this.bb_expt_gongji = App.getConfig().bb_expt_gongji;
    }

    public toQueryString(): string {
        return querystring.stringify(this);
    }

}
