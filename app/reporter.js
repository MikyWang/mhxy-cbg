"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const wellknow = require("nodemailer-wellknown");
const main_1 = require("./main");
class Reporter {
    constructor(acc, pass) {
        const config = wellknow("QQ");
        config.auth = {
            user: acc,
            pass: pass,
        };
        this.transporter = nodemailer.createTransport(smtpTransport(config));
    }
    sendReport(msg) {
        const mailOptions = {
            from: `cbg-reporter<` + main_1.App.getConfig().smtpAccount + `>`,
            to: main_1.App.getConfig().recvMail,
            subject: main_1.App.getConfig().reporterSubject,
            text: msg,
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error)
                throw error;
            console.log('已发送邮件,发送状态:' + info.response);
        });
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map