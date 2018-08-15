import querystring = require('querystring');

export class Filter {
    public level_min: number = 159;
    public level_max: number = 159;
    public expt_fangyu: number = 25;
    public expt_kangfa: number = 25;
    public bb_expt_gongji: number = 25;
    public bb_expt_fashu: number = 20;
    public act: string = 'overall_search_role';
    public page: number = 1;

    public toQueryString(): string {
        return querystring.stringify(this);
    }
}
