"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const wellknow = require("nodemailer-wellknown");
class Reporter {
    constructor(acc, pass) {
        const config = wellknow("QQ");
        config.auth = {
            user: acc,
            pass: pass,
        };
        this.transporter = nodemailer.createTransport(smtpTransport(config));
    }
    sendReport(mailAddress, msg) {
        const mailOptions = {
            from: "cbg-reporter<@qq.com>",
            to: "813853090@qq.com",
            subject: "符合条件的角色！",
            text: msg,
        };
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error)
                throw error;
            console.log('Message sent: ' + info.response);
        });
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map