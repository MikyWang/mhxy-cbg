import { Player } from "./player";

export interface IPager {
    num_end: number;
    num_begin: number;
    cur_page: number;
}

export interface IResult {
    status: number;
    pager: IPager;
    equip_list: Player[];
}
