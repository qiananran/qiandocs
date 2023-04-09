---
title: VLAN
---

# {{ $frontmatter.title }}

## 前言
随着网络中计算机数量越来越多，传统的以太网络开始面临广播泛滥以及安全性无法保障等各种问题。<br>
VLAN（Virtual Local Area Network）即虚拟局域网，是将一个物理的局域网在逻辑上划分成多个广播域的技术。通过在交换机上配置VLAN,可以实现在同一VLAN内的用户可以进行二层互访，而不同VLAN间的用户被二层隔离，这样既能够隔离广播域，又能够提升网络的安全性。

## 在VLAN之前
+ 交换机的所有接口属于一个广播域，往往也是一个逻辑子网;
+ 用户无法根据业务需要灵活的在交换机上进行广播域的隔离;
+ 随着网络规模越来越大，数量越来越多，广播风暴将给网络带来重大问题。

## VLAN
### 概述
+ 将一个物理局域网在逻辑上划分成多个广播域
+ 1Vlan = 1广播域 = 1子网 （划分最好一个子网一个VLAN）
+ 广播不会在不同VLAN间转发，而是限制在相同的VLAN中
+ 不同VLAN之间的设备默认无法通信

### VLAN 范围
VLAN 范围：0～4095 （0和4095保留，1为默认）

### 目的
划分VLAN,将广播域范围减小
+ vlan（Virtual LAN）技术提供了一种灵活的解决方案;
+ 将交换机的接口根据业务需要添加到不同的VLAN中，从而实现二层隔离。

### 优点
+ 有效控制广播域范围
+ 增强局域网的安全性
+ 灵活构建虚拟工作组
+ 简化网络管理

### VLAN划分：基于端口最常见
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/vlan.png)

### VLAN标签
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/vlan.png)

IEEE 802.1q：又称dot1q，是VLAN的正式标准，对Ethernet帧格式进行修改，在源Mac地址字段和协议类型字段中插入了4字节的802.1q Tag<br>
每台支持802.1q协议的交换机发送的数据帧都会包含VLAN ID，以指明数据帧属于哪一个VLAN。因此，在一个VLAN交换网络中，以太网帧有以下两种格式
| **无标记帧（untagged frame） ** | **原始的数据帧，未加入4字节802.1q tag的字段** |
|---------------------------|--------------------------------|
| 有标记帧（tagged frame）        | 插入了4字节802.1q tag的字段            |

路由器和终端设备发送的数据帧默认是untagged frame，默认也识别不了tagged frame

### VLAN 链路类型
| **Access Link  ** | **接入链路一般用于连接主机或路由器之间的链路接入链路上传输的帧都是untagged帧**             |
|-------------------|-----------------------------------------------------------|
| Trunk Link        | 干道/中继链路一般用于交换机间的互连或交换机与路由器之间的链路干道链路上传输的帧几乎都是tagged帧用于两端识别 |

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/vlan1.png)

### PVID
PVID: Port Vlan identification 端口缺省VLAN
指明该端口属于VLAN

+ 即Port VLAN ID，代表端口的缺省VLAN
+ X7系列的交换机每个端口PVID=1


### VLAN 端口类型：
Access接入端口
+ 用于连接主机收到数据后会添加VLAN Tag，VLAN ID和端口的PVID相同
+ 转发数据前会移除VLAN Tag
+ 注意：终端设备（PC）发出和接收的都是untagged的帧，否则无法识别
通俗解释：<br>
交换机每个接口有PVID，默认PVID=1，可以修改。
当接口为Access模式时：
+ 收到未打标签（untagged）的帧会添加接口的PVID
+ 收到打标签（tagged）的帧会直接修改为tagged帧的VLAN Tag
+ 发帧时统一剥离VLAN Tag（Untagged）并与发送接口的PVID比较，一致转发不一致丢弃

Trunk干道端口
+ 用于连接交换机或路由器
+ 收到帧时：如果该帧不包含Tag，将打上端口的PVID；
+ 如果该帧包含Tag，则不改变。
+ 发送帧时：首先要保证该帧的VLAN ID在Trunk的允许发送列表中（华为默认只允许VLAN1，思科默认允许所有VLAN）
+ 若与端口的PVID相同时，则剥离Tag发送；
+ 若与端口的PVID不同时，则直接发送。

通俗解释:<br>
交换机每个接口有PVID，默认PVID=1，可以修改。
接口为Trunk模式时：
+ 收到未打标签的帧，将打上端口的PVID（和access模式一样）
+ 收到打标签的帧，则不改变直接转发
+ 发送帧时，先检查该帧VLAN ID在Trunk的允许发送列表
+ 若发送的帧与端口的PVID相同，剥离Tag发送；（和access模式一样）
+ 若与端口的PVID不同时，则直接发送。

Hybrid混杂端口
+ 既可以连接主机，又可以连接其他交换机。
+ 既可以连接接入链路又可以连接干道链路。
+ 允许多个VLAN的帧通过，并可以在出接口方向将某些VLAN帧的Tag剥离掉（由命令决定）
通俗解释<br>
+ 交换机每个接口有PVID，默认PVID=1，可以修改。
+ 可以任意指定数据帧发送或接收是否携带tagged
+ 接口属于混杂模式，既可以是Trunk又可以是Acess
+ 收帧时既可以打上标签（Access），也可以直接转发带标签的帧（Trunk）
+ 发帧时既可以直接转发带标签的帧（Trunk），也可以剥离标签（Acess）

#### 配置Hybrid

![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-07at19-52-07.png)
交换机之间的g0/0/1口可以打标签也可以不打标签，打标签就是Trunk模式，不打就是Acess模式<br>
即 port hybrid tagged vlan 2 3 100这条命令可以不写
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-07at19-52-07.png)

### 交换机判断Vlan的逻辑
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-07at20-05-13.png)



### VLAN 命令
| 命令                                                                     | 备注                                            |
|------------------------------------------------------------------------|-----------------------------------------------|
| vlan 10                                                                | 创建单个VLAN                                      |
| vlan batch 10 to 20                                                    | 创建多个VLAN                                      |
| port link-type access<br>port link-type trunk<br>port link-type hybrid | 配置接口类型<br>简写为P L A、P L T、P L H                |
| port default vlan 10                                                   | 配置access关联的VLAN/PVID,简写 P D V 10              |
| port trunk allow-pass vlan 10                                          | 配置Trunk允许通过的VLAN，简写P L A V 10<br>华为默认只允许VLAN1 |
| port trunk pvid vlan 10                                                | 配置Trunk的PVID                                  |
| port hybrid tagged vlan 10<br>port hybrid untagged vlan 10             | 配置Hybird标记VLAN（标记和剥离）                         |
| port hybrid pvid vlan 10                                               | 配置Hybird的PVID                                 |
| display vlan                                                           | 验证VLAN                                        |
| display port vlan 10                                                   | 验证VLAN                                        |


## 交换机的工作原理：
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-07at20-10-40.png)

### 前言
部署了VLAN的传统交换机不能实现不同VLAN间的二层报文转发，因此必须引入陆游技术来实现不同VLAN间的通信，VLAN路由可以通过二层交换机配合路由器来实现，也可以通过三层交换机来实现。

### VLAN 间的通信限制
每一个VLAN都是独立的广播域,不同VLAN之间隔离，因此不同VLAN的节点之间是无法直接访问。

### VLAN 间通信方法（路由）
使用路由器完成不同VLAN通信，（缺点：每一个VLAN就需要绑定一个物理接口）<br>

单臂路由
+ 将交换机和路由器之间配置为Trunk链路，并且在路由器上创建子接口以支持VLAN陆游

::: danger 交换机设置为Trunk,路由器如何识别VLAN
dot1q termination vid 10 作用
该子接口与vlan 10 绑定，受到VLAN10就剥离VLAN,查看路由表执行路由转发，转发在打上转发接口的PVID
:::

路由器一般用作出口设备（广播域太大），且价格较为昂贵，使用路由器实现VLAN间通信不经济


使用具有路由功能的交换机实现VLAN间通信

## VLAN 配置
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/net/Screenshot%202023-04-07at21-11-33.png)
