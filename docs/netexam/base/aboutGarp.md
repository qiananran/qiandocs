---
title: GARP GVRP
---

# {{ $frontmatter.title }}

## 前沿
**GARP(Generic Attribute Registration Protocol)：** 全称是通用属性注册协议，它为处于同一个交换网内的交换机之间提供了一种分发，传播、注册某种信息（VLAN属性、组播地址等）的手段。
GVRP是GARP的一种具体应用或实现，主要用于维护设备动态VLAN属性
+ 通过GVRP协议，一台交换机上的VLAN信息会迅速传播到整个交换网络
+ GVRP实现了LAN属性的动态分发、注册和传播，从而减少了网络管理员的工作量，也能保证VLAN配置的正确性。

## GARP
GARP:Generic Attribute Regisration Protocol 通用属性注册协议<br>
+ 在交换机间分发、传播、注册某种信息（VLAN属性、组播地址等）
+ 主要用于大中型企业网络中，用来提升管理交换机的效率
+ 一种协议规范

### GARP消息类型:
| 类型        | 备注          |
|-----------|-------------|
| Join加入    | 加入，端口加入VLAN |
| Leave注销   | 端口退出VLAN    |
| Leave All | 注销所有        |


+ 当一个交换机希望其他交换机注册自己的属性时候，将对外发送Join消息。


+ 当一个交换机希望其他交换机注销自己的属性信息时，将对外发送Leave消息。


+ 交换机发送Leave All消息，用来注销所有的属性。


## GVRP
GVRP：GARP VLAN Registration Protocol，VLAN注册协议<br>
GVRP基于GARP的工作机制，是GARP的一种应用，传递VLAN信息
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-08at16-20-19.png)

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-08at16-19-46.png)

VLAN 分为常规（静态）和动态VLAN


### GVRP的应用
+ 接收来自其他交换机的VLAN注册信息，并动态的更新本地的VLAN信息同步
+ 将本地的VLAN注册信息向其他交换机传播，以便同一交换机内所有支持GVRP的设备VLAN信息同步
+ 手动配置的VLAN是静态VLAN,通过GVRP创建的VLAN是动态VLAN
+ GVRP传播的VLAN注册信息包括静态创建的VLAN信息和动态学习的VLAN信息。

+ 单向注册

1. 在SWA上创建静态VLAN2,通过VLAN属性的单向注册，SWB和SWC会学习到动态VLAN2,并将相应端口自动加入到VLAN2中
2. SWB的G0/0/2端口没有收到Join消息，不会被加入到VLAN2中。

+ 单向注销
1. 当交换机不再需要VLAN2时，可以通过VLAN属性的注销过程将VLAN2删除。

### GVRP注册模式： 3种
1. **Normal**
交换机端口默认为Normal模式，允许静态和动态VLAN注册，同时会发送静态VLAN和动态VLAN的声明消息。<br>

Normal正常模式： 允许静态和动态VLAN注册，同时会发送静态VLAN的声明消息。

2. **Forbidden**
SWA的G0/0/1 端口为Forbidden模式，不允许动态VLAN在端口上进行注册，同时删除所有学习到的VLAN（只剩下VLAN1）<br>
Forbidden禁止模式：不会接收动态VLAN注册，同时删除所有学习到的VLAN （只剩VLAN1）

3. **Fixed**

Fixed固定模式：不会发送和接收动态的注册信息，只会发送静态注册消息。

### GVRP 配置
| 命令                                                                          | 配置                    |
|-----------------------------------------------------------------------------|-----------------------|
| gvrp                                                                        | 全局开启GVRP，默认关闭         |
| int g0/0/1 gvrp                                                             | 接口开启GVRP，接口类型必须是Trunk |
| gvrp registration fixed
gvrp registration forbiddengvrp registration normal | 配置GVRP注册模式            |
| display gvrp status                                                         | 查看GVRP状态              |

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-08at17-01-35.png)
