"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
class App {
    static startUp() {
        const search = new search_1.Search();
        search.searchMixPlayer(1);
    }
}
App.startUp();
//# sourceMappingURL=main.js.map