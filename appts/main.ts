import fs = require('fs');
import { IConfig } from "./interface";
import { Search } from "./search";

export class App {

    public static config: IConfig = null;

    public static startUp() {
        const search = new Search();
        search.searchMixPlayer(1);
    }

    public static getConfig(): IConfig {
        if (App.config) return App.config;
        const content = fs.readFileSync(process.cwd() + '/cbgconfig.json', "utf-8");
        App.config = JSON.parse(content) as IConfig;
        return App.config;
    }
}

App.startUp();
