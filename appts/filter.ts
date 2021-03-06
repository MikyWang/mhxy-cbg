import querystring = require('querystring');
import { App } from './main';

export class Filter {
    public level_min: number;
    public level_max: number;
    public expt_fangyu: number;
    public expt_kangfa: number;
    public bb_expt_gongji: number;
    public bb_expt_fashu: number;
    public expt_fashu: number;
    public skill_shensu: number;
    public skill_qiang_zhuang: number;
    public qian_yuan_dan: number;
    public xiangrui_list: string;
    public act: string = 'overall_search_role';
    public page: number = 1;

    constructor() {
        this.level_min = App.getConfig().level_min;
        this.level_max = App.getConfig().level_max;
        this.expt_fangyu = App.getConfig().expt_fangyu;
        this.expt_kangfa = App.getConfig().expt_kangfa;
        this.bb_expt_fashu = App.getConfig().bb_expt_fashu;
        this.bb_expt_gongji = App.getConfig().bb_expt_gongji;
        this.skill_shensu = App.getConfig().skill_shensu;
        this.qian_yuan_dan = App.getConfig().qian_yuan_dan;
        this.skill_qiang_zhuang = App.getConfig().skill_qiang_zhuang;
        this.xiangrui_list = App.getConfig().xiangrui_list;
        this.expt_fashu = App.getConfig().expt_fashu;
    }

    public toQueryString(): string {
        return querystring.stringify(this);
    }

}
