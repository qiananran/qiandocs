---
title: 安装
---
# {{ $frontmatter.title }}

::: info
整体而言，ROS2的安装步骤不算复杂，大致步骤如下：

    准备1：设置语言环境；
    准备2：启动Ubuntu universe存储库；
    设置软件源；
    安装ROS2；
    配置环境。

请注意：虽然安装比较简单，但是安装过程比较耗时，需要耐心等待。

:::

## 准备1：设置语言环境

请先检查本地语言环境是否支持UTF-8编码，可调用如下指令检查并设置UTF-8编码：
```sh
locale  # 检查是否支持 UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

locale  # 验证设置是否成果

```

注意：语言环境可以不同，但必须支持UTF-8编码。

## 准备2：启动Ubuntu universe存储库

方式：命令行操作

首先，通过如下命令检查是否已经启动了Ubuntu universe存储库：
```sh
apt-cache policy | grep universe
 500 http://us.archive.ubuntu.com/ubuntu jammy/universe amd64 Packages
     release v=22.04,o=Ubuntu,a=jammy,n=jammy,l=Ubuntu,c=universe,b=amd64
```
如果没有如上所示的输出，那么请调用如下命令启动Ubuntu universe存储库：
```sh
sudo apt install software-properties-common
sudo add-apt-repository universe
```
## 设置软件源

先将ROS 2 apt存储库添加到系统，用apt授权我们的GPG密钥：
```sh
sudo apt update && sudo apt install curl gnupg lsb-release
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

然后将存储库添加到源列表：
```sh
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```
## 安装ROS2

首先更新apt存储库缓存：
```sh
sudo apt update
```
然后升级已安装的软件(ROS2软件包建立在经常更新的Ubuntu系统上，在安装新软件包之前请确保您的系统是最新的)：
```sh
sudo apt upgrade
```
安装桌面版ROS2(建议)，包含：ROS、RViz、示例与教程，安装命令如下：
```sh
sudo apt install ros-humble-desktop
```
或者，也可以安装基础版ROS2，包含：通信库、消息包、命令行工具，但是没有 GUI 工具，安装命令如下：
```sh
sudo apt install ros-humble-ros-base
```
## 配置环境

终端下，执行ROS2程序时，需要调用如下命令配置环境：
```sh
source /opt/ros/humble/setup.bash
```
每次新开终端时，都得执行上述命令，或者也可以执行如下命令，将配置环境指令写入 ”~/.bashrc“ 文件，那么每次新启动终端时，不需要在手动配置环境：
```sh
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```
到目前为止，ROS2就已经安装且配置完毕了。

## 测试ROS2
在ROS2中已经内置了一些案例，安装完毕之后，就可以运行这些案例，以测试ROS2的安装与配置是否正常，在此，我们选用ROS2内置的小乌龟案例，具体操作如下。

1.打开两个终端(可以使用快捷键Ctrl + Alt + T)；

2.终端1中输入指令：`ros2 run turtlesim turtlesim_node`，执行完毕，会启动一个绘有小乌龟的窗口；

3.终端2中输入指令：`ros2 run turtlesim turtle_teleop_key`，执行完毕，可以在此终端中通过键盘控制乌龟运动。

## 安装colcon构建工具
colcon是一个命令行工具，用于改进编译，测试和使用多个软件包的工作流程。它实现过程自动化，处理需求并设置环境以便于使用软件包。ROS2中便是使用colcon作为包构建工具的，但是ROS2中没有默认安装colcon，需要自行安装，安装命令如下：
```sh
sudo apt install python3-colcon-common-extensions
```


## 关于 raw.githubusercontent.com 连接失败的处理

安装ROS2过程中，执行到设置软件源时，可能会抛出异常。
::: danger
异常提示：curl: (7) Failed to connect to raw.githubusercontent.com port 443: 拒绝连接。
:::
异常原因：DNS被污染。

解决思路：查询错误提示中域名的IP地址，然后修改 /etc/hosts 文件，添加域名与IP映射。

具体实现：

1.访问 https://www.ipaddress.com/ 并输入域名 raw.githubusercontent.com，查询 ip 地址。

查询到的ip地址可能有多个，记录任意一个地址即可。

2.修改/etc/hosts文件：
```sh
sudo gedit /etc/hosts
```
添加ip和域名映射到hosts文件，保存并退出。

操作完毕后，终端再次运行安装指令即可正常执行

