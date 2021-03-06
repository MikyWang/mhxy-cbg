# 使用方法
1. 在项目根目录执行`npm install`
2. 打开`cbgconfig.json`进行初始化配置
3. 命令行打开项目根目录，执行命令`npm start`

# cbgconfig.json属性注释
+ `smtpAccount` 用来发送邮件的QQ邮箱地址
+ `smtpPassword` 用来发送邮件的QQ邮箱SMTP授权码（不是QQ密码！）参考[打开QQ邮箱SMTP验证并获取授权码](https://jingyan.baidu.com/article/6d704a133a245f28db51caf5.html)
+ `reporterSubject` 邮件标题
+ `recvMail` 接收账户邮件地址
+ `interval` 每页查询间隔时间(毫秒)
+ `level_min` 查询角色最低等级
+ `level_max` 查询角色最高等级
+ `expt_fangyu` 查询角色防御修炼
+ `expt_kangfa` 查询角色抗法修炼
+ `expt_fashu` 角色法术修炼
+ `skill_shensu` 查询角色神速
+ `skill_qiang_zhuang` 查询角色强壮
+ `qian_yuan_dan` 查询角色乾元丹个数
+ `bb_expt_gongji` 查询角色宝宝攻击控制
+ `bb_expt_fashu` 查询角色宝宝法术控制
+ `xiangrui_list` 携带祥瑞
+ `expectPrice` 期望收购价格

# 增加过滤条件方法
1. 打开`cbgconfig.json`，并将过滤字段名添加。
2. 打开`interface.ts`，并将过滤字段添加。
3. 打开 `filter.ts`，并将过滤字段添加，并且在`constructor`方法里头添加字段赋值（参考其他字段）
4. 打开 `README.md`，并将字段说明添加（可选）
5. 保存然后命令行执行`npm start`