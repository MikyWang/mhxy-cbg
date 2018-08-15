import nodemailer = require('nodemailer');
import smtpTransport = require('nodemailer-smtp-transport');
import wellknow = require('nodemailer-wellknown');

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

    public sendReport(mailAddress: string, msg: string) {
        const mailOptions: nodemailer.SendMailOptions = {
            from: "cbg-reporter<@qq.com>",
            to: "813853090@qq.com",
            subject: "符合条件的角色！",
            text: msg,
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) throw error;
            console.log('Message sent: ' + info.response);
        });
    }
}
