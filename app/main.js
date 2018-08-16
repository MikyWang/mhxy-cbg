"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const search_1 = require("./search");
class App {
    static startUp() {
        const search = new search_1.Search();
        search.searchMixPlayer(1);
    }
    static getConfig() {
        if (App.config)
            return App.config;
        const content = fs.readFileSync(process.cwd() + '/cbgconfig.json', "utf-8");
        App.config = JSON.parse(content);
        return App.config;
    }
}
App.config = null;
exports.App = App;
App.startUp();
//# sourceMappingURL=main.js.map