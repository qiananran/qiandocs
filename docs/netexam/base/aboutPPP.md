---
title: PPP 点对点协议
---

# {{ $frontmatter.title }}

## 前言
广域网中经常会使用串行链路来提供远距离的数据传输，高级数据链路控制HDLC（High-Level Data Link Control）和点对点协议PPP（Point to Point Protocol）是两种典型的串口封装协议。

### HDLC协议应用
+ High-level Data Link Control, 高级数据链路控制，简称HDCL,是一种面向比特的链路层协议。
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/AElFTkSuQmCC.png)


**HDLC接口地址借用**
+ 串行接口可以借用Loopback接口的Ip地址和对端建立链接。

### PPP协议应用
+ PPP协议是一种点到点链路层协议，主要用于在全双工的同异步链路上进行点到点的数据传输。

**PPP 组件**<br>
|    | 名称                                           | 作用                     |
|----|----------------------------------------------|------------------------|
| 上层 | NCP<br>
网络层控制协议
<br>Network Control Protocol | 用于对不同的网络层协议进行连接建立和参数协商 |
| 下层 | LCP
链路控制协议
Link Control Protocol             | 用于建立、拆除和监控PPP数据链路以及认证  |


**PPP认证模式：PAP和CHAP** <br>

| 模式          | 备注                                                                                                                                                             |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PAP
（发明文密码） | Password authentication protocol，密码认证协议 ，以明文方式直接放送密码，
二次握手机制，发起方为被认证方
缺点：以明文的形式发送密码不安全
          因为发送方为被任正非所以可以无限次的尝试（暴力破解）
          只在链路建立的阶段认证，一旦成功建立后将不在认证 |
| CHAP
（发暗号）  | CHAP（发暗号）Challenge Handshake Authentication Protocol，挑战/质询握手认证议，以MD5来隐藏密码，三次握手机制，发起方为认证方，有效避免了暴力破解，在链路建立后具有再次认证检测机制，目前使用的广泛                                    |


**PPP认证配置：**<br>
| 命令                                                                                                   | 备注                                                                                          |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| aaa
      local-user huawei password cipher 123.com
      local-user huawei service-type ppp
（发明文密码） | 配置PPP，设置用户名、密码和服务类型
          因为发送方为被任正非所以可以无限次的尝试（暴力破解）
          只在链路建立的阶段认证，一旦成功建立后将不在认证 |
| ppp authentication-mode PAP 或
ppp authentication-mode CHAP
（发暗号）                                     | 开启PAP或CHAP认证（认证方配的）                                                                         |
| ppp pap local-user huawei password cipher 123.com                                                    | 配置PAP认证（被认证方配的）                                                                             |
| ppp chap user huawei
ppp chap password cipher 123.com                                                | 配置CHAP认证（被认证方配的）                                                                            |


注：
只配置一方的用户名和密码，另一方开启认证的，这种为单向认证。
可以两边都配置用户名和密码，同时开启认证模式，互相发送认证信息，这种为双向认证。
