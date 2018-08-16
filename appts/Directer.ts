import querystring = require('querystring');

export class Directer {
    public s: number;
    public eid: string;
    public equip_refer: number;

    public init(s: number, eid: string, equip_refer: number) {
        this.s = s;
        this.eid = eid;
        this.equip_refer = equip_refer;
    }

    public toQueryString(): string {
        return querystring.stringify(this);
    }

}
