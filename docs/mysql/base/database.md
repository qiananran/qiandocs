---
title: 数据库创建和管理
food: Pizza
---

# {{ $frontmatter.title }}

::: tip 话不多说，先来个音乐🫀
<Iframe mylink="//music.163.com/outchain/player?type=2&id=29567187&auto=1&height=66"> </Iframe>
:::

## 数据库分类
### 1、系统数据库
新安装的数据库，当我们第一次使用`SHOW DATABASES;`的时候，会发现他默认给我们创建了几个数据库。请使用者千万别删除这些数据库，因为他们都有自己的只能，下面我带大家认识一下这些数据库。
::: info 系统默认浏览器
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230319-163101.png)
:::

(1) **information_schema:** 数据库主要存储了系统中的一些数据库对象信息，如用户表信息，列信息，存储过程信息、触发器信息、权限信息、字符集信息、分区信息等。

(2) **performance_schema:** 数据库存储了数据库服务器性能参数。

(3) **mysql:** 数据库存储了系统的用户权限信息。

(4) **sys:** 可以方便DBA发现数据库的很多信息，解决性能瓶颈都提供了巨大帮助<br>
这个库是通过视图的形式把information_schema 和performance_schema结合起来，查询出更加令人容易理解的数据<br>
存储过程可以可以执行一些性能方面的配置，也可以得到一些性能诊断报告内容<br>
存储函数可以查询一些性能信息 <br>

### 2、用户数据库
用户数据库： 顾名思义就是用户根据实际的需求创建的数据库。


## 数据库的创建、管理和维护
::: tip
这里的全部操作都是在命令行终端中进行的，读者可以根据自己的实际情况选择喜爱的数据库可视化工具
:::
### 1、创建数据库
::: tip 说明
在 windows 操作系统中，数据库对象名**不区分大小写**，My_School 和 my_school 是一样的 <br>
在 Unix 操作系统下，数据库对象名是**区分大小写的**， My_School 和 my_school 是不一样的
:::

1. 语法格式：
``` sql
CREATE DATABASE db_name; -- db_name 是你要创建的数据库的名称
```

2. 规则：
+ 创建的数据库名不能与已有的数据库重名
+ 由字母、数字、下划线、@、#、$符号组成
+ 首字符不能是数字和$符号
+ 标识符不能是MySQL保留字
+ 长度小于128位

3. 创建事例
::: info 事例
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230319-165914.png)
:::

### 2、查看数据库
1. 语法
```sql
SHOW DATABASES;
```

2. 实例
::: info
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230319-163101.png)
:::
### 3、选择数据库
1. 语法
```sql
USE db_name;  -- db_name 就是你需要的数据库名称
```
2. 实例
::: info
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230319-171432.png)
:::

### 4、删除数据库
1. 语法
```sql
DROP DATABASE db_name;  -- db_name 就是你想要删除的数据库名称
```
删除完后，我们可以检查一下数据库是否还存在。

2. 实例
::: info
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230319-171721.png)
:::


## 思考

::: details 有那些系统数据库？ 其用途分别是什么？
（1）、information_schema数据库:主要储存了系统中的一些数据库对象信息。比如用户表信息、列信息、存储过程信息、触发器信息、权限信息、字符集信息、分区信息等。<br>
（2）、performation_schema:储存了数据库服务器性能参数。<br>
（3）、mysql：储存了系统的用户权限信息。<br>
（4）、test：系统自动创建的测试数据库，任何用户都可以使用。<br>
:::


::: details MySQL 可以使用什么操作它？
（1）、终端命令行工具<br>
（2）、各个开发商开发的数据库可视化工具
:::




<CopyRight />

    








