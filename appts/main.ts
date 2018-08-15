import { Search } from "./search";

class App {
    public static startUp() {
        const search = new Search();
        search.searchMixPlayer(1);
    }
}

App.startUp();
