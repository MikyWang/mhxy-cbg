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

export interface IConfig {
    smtpAccount: string;
    smtpPassword: string;
    reporterSubject: string;
    recvMail: string;
    interval: number;
    level_min: number;
    level_max: number;
    expt_fangyu: number;
    expt_kangfa: number;
    skill_shensu: number;
    skill_qiang_zhuang: number;
    qian_yuan_dan: number;
    bb_expt_gongji: number;
    bb_expt_fashu: number;
    expectPrice: number;
}
