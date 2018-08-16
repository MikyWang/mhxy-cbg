# 使用方法
1. 打开`cbgconfig.json`进行初始化配置
2. 命令行打开项目根目录，执行命令`npm start`

# cbgconfig.json属性注释
+ `smtpAccount` 用来发送邮件的QQ邮箱地址
+ `smtpPassword` 用来发送邮件的QQ邮箱SMTP授权码（不是QQ密码！）参考[打开QQ邮箱SMTP验证并获取授权码](https://jingyan.baidu.com/article/6d704a133a245f28db51caf5.html)
+ `reporterSubject` 邮件标题
+ `recvMail` 接收账户邮件地址
+ `interval` 每页查询间隔时间
+ `level_min` 查询角色最低等级
+ `level_max` 查询角色最高等级
+ `expt_fangyu` 查询角色防御修炼
+ `expt_kangfa` 查询角色抗法修炼
+ `bb_expt_gongji` 查询角色宝宝攻击控制
+ `bb_expt_fashu` 查询角色宝宝法术控制
+ `expectPrice` 期望收购价格