import nodemailer = require('nodemailer');
import smtpTransport = require('nodemailer-smtp-transport');
import wellknow = require('nodemailer-wellknown');
import { App } from './main';

export class Reporter {

    private transporter: nodemailer.Transporter;

    constructor(acc: string, pass: string) {
        const config: smtpTransport.SmtpOptions = wellknow("QQ");
        config.auth = {
            user: acc,
            pass: pass,
        };
        this.transporter = nodemailer.createTransport(smtpTransport(config));
    }

    public sendReport(msg: string) {
        const mailOptions: nodemailer.SendMailOptions = {
            from: `cbg-reporter<` + App.getConfig().smtpAccount + `>`,
            to: App.getConfig().recvMail,
            subject: App.getConfig().reporterSubject,
            text: msg,
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) throw error;
            console.log('已发送邮件,发送状态:' + info.response);
        });
    }
}
