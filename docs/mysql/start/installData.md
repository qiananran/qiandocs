---
title: 安装MySQL
---
# {{ $frontmatter.title }}

> 声明: 操作系统：Ubuntu 22.04.02 MySQL 8.0

## 下载
在安装任何软件的时候，我们都要在官方下载其源程序。请擦亮眼睛，一定要认准官方。
使用这个链接下载[官方源](https://dev.mysql.com/downloads/repo/apt/)，我们可以使用wget，进行下载。
```shell
sudo wget https://dev.mysql.com/get/mysql-apt-config_0.8.24-1_all.deb
```

## 安装官方源
使用一下命令
```shell
sudo dpkg -i mysql-apt-config_0.8.24-1_all.ded
```
在安装的过程中会出现安装界面，根据我的截图操作就可以了
::: details 安装源界面 
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-124813.png)

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-124945.png)

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125104.png)
:::
等待它安装完就好了。不过它会有一个警告。我们不需要管他，直接下一步。

::: details 安装警告
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125220.png)
:::

## 更新系统源
```shell
sudo apt update
```

## 安装
```
sudo apt install mysql-server
```

![直接yes](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125452.png)
在终端中键入命令后->回车，会出现一个安装界面
这个时候需要输入root密码

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125605.png)

确认密码
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125719.png)

在这个界面中直接 OK 就好
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125804.png)

因为 mysql 8.0 更改了认证方式，为了兼容老系统，我们选择老的认证方式
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-125927.png)

回车后，等待其安装完成
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130330.png)

## 检查是否安装成功
```shell
sudo systemctl status mysql
```
如果在终端中打印了一下信息，说明安装成功了
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130423.png)


## 登陆到 MySQL
```shell
mysql -u root -p <输入你的密码>
```
出现一下内容，说明你的MySQL 就已经可以使用了
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130521.png)


## 开启远程登陆设置
默认情况下，MySQL只能在本地登陆，为了方便操作，我们要吧root的host改为任意

```sql
show databases;

use mysql;

select host, user from user; # 查看 root 的 host

update user set host="%" where user="root"; # 设置root用户

flush privileges; # 更新 MySQL

```

::: details 更改 root 截图

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130627.png)
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130737.png)
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-130907.png)
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-131123.png)
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-131455.png)
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-131352.png)
:::