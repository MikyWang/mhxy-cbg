"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring = require("querystring");
class Directer {
    init(s, eid, equip_refer) {
        this.s = s;
        this.eid = eid;
        this.equip_refer = equip_refer;
    }
    toQueryString() {
        return querystring.stringify(this);
    }
}
exports.Directer = Directer;
//# sourceMappingURL=Directer.js.map