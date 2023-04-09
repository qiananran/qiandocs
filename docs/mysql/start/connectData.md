---
title: 连接数据库
---

# {{ $frontmatter.title }}

::: tip 声明
为了能够在一个编辑器上完成大部分工作，做到 an-in-one<br>
所以我选择使用 VsCode进行数据库链接。<br>
这样我不需要到处找软件，遇到付费的软件还要去破解。麻烦之极
:::

## 安装 VsCode
因为这不是本文档的重点。所以不再这里做过都介绍。请自己准备好VsCode。

## 安装插件
> 在此之前，我测试了很多种连接插件。找到了一个比较好一点的

在 vscode 中安装这两款插件，第一个是收费的，但可以使用其免费功能<br>
还未测试其高级功能能是否能够使用。插个眼，以后回来解答。
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-223921.png)

安装完成后，在左侧栏中会出现一个数据库的图标
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-224152.png)

单击运行。

在这个截图中进行配置，您的链接数据
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230317-224343.png)

地址：localhost
用户： root
密码：就是你数据库的密码

至此，链接完成

::: tip
通过以上的设置，仅仅只能进行本地，或者说同一局域网内的设备进行访问，要想进行公网访问，还需要就进行一下操作。
:::

## 访问工具
进行公网访问，我们需要借助一个名为[cpolar](https://www.cpolar.com)的内网穿透工具进行设置。<br>

## 配置 cpolar
1. 进入 [cpolar官网](https://www.cpolar.com),创建账户。

2. 当我们进入账户主页的时候，主页上就说明了在不同操作系统中如何去安装和配置该软件，我们只需要按照他的说明进行初步安装。贴一张截图进行演示
![官网主页截图](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-103819.png)
<center style="color: #06f;padding: 0 0 20 0">官网主页截图</center>

3. 我们可以使用官网的安装方式，虽然就几步，但操作起来还是有点麻烦的，此时我们可以借助curl+bash 进行自动化安装，这就体现了Linux操作系统的方便性。一行代码搞定
```shell
curl -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh | sudo bash
```
出现一下提示，就说明你已经安装成功了
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-105105.png)
<center style="color: #06f;"> 安装完后打印的信息</center>

4. 此刻我们可以使用版本查看命令查看cpolar的版本
```shell
cpolar --version
```
如果打印除了版本信息，就说明已经安装成功了。

5. 添加cpolar认证
::: tip
他是我们注册完成账户信息后，自动生成的，直接复制下来即可
:::
```shell
cpolar authtoken xxxxxxx # xxxx 表示你的认证token
```

6. 为了我们以后方便操作，需要将cpolar服务添加到系统服务中去，并启动服务
```shell
sudo systemctl enable cpolar  # 向系统添加服务

sudo systemctl start cpolar   # 启动服务
```

7. 查看服务状态
```shell
sudo systemctl status cpolar
```
如果出现Active（running），就说明已经在启动了
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-110724.png)
<center style="color: #06f">服务启动成功</center>

8. 登陆 cpolar web ui界面
在浏览器地址栏输进入`http://localhost:9200`web ui 界面
```shell
http://localhost:9200
```
打开后，输入注册时用的邮箱和密码进行登陆即可。

9. 创建隧道
根据截图进行创建
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-111457.png)

查看隧道
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-111548.png)

10. 远程链接
首先说明一下cpolar生成的域名信息
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-112750.png)

为了能体现他是远程链接，在两台电脑上使用不同的网络进行测试
连接数据库的时候，配置一下信息，就可以连接成功。
```shell
3.tcp.vip.cpolar.cn:11290
域名或主机号           端口号 
主机：3.tcp.vip.cpolar.cn
端口号：11290
用户名: root
密码：就是你mysql数据库的密码  
```

至此我们就可以进行公网访问了。

## 额外
额外在补充一点<br>

<p style="color: #06f;">其实使用这个方法我们还可以对Ubunut进行远程访问</p>
<p>具体操作：</p>
1. 在cpolar隧道中创建一个tcp，端口为22的隧道

2. 在其他电脑使用ssh进行登陆

3. 输入命令
```bash
ssh 用户名@域名 -p 端口号
# 例子
ssh sophia@3.tcp.vip.cpolar.cn -p 11047 
```
回车后，输入密码进行远程登陆。






<CopyRight/>

