# ScdmAngular7Mysql

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## 部署实验室主页

+ 在CentOS中删除 `rm -rf scdm-angular7-mysql`
+ 本地复制目录到CentOS `pscp -r -P 443 scdm-angular7-mysql shuwsc@dmis.shu.edu.cn:/home/shuwsc`
+ 进入CentOS后，复制到ubuntu17 `scp -r scdm-angular7-mysql shuwsc@ubuntu17:/home/shuwsc/`
+ 进入ubuntu17 `ssh ubuntu17`
+ 超级管理员 `sudo su`
+ 删除之前的文件夹 `rm -rf /var/www/scdm-angular7-mysql`
+ 移动目录到根目录 `mv scdm-angular7-mysql /var/www/`
+ 重启nginx `service nginx restart`