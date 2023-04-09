---
title: 认识数据库
---

# {{ $frontmatter.title }}


::: tip 开始之前先听个音乐
<Iframe mylink="//music.163.com/outchain/player?type=2&id=1974443814&auto=1&height=66"></Iframe>
:::
https://hyperbeam.com/i/HXTsTYG0
## 基础知识补充
1. 数据: 描述事物的符号称为数据。他可以有很多表示方式，比如数字、图片、文字、声音、视频等。
2. 信息: 指对数据进行加工后提取的对人类社会实践和生产活动产生决策影响的数据。信息就是数据中所包含的意义。
3. 数据库: 指长期存储在计算机内的、有组织的、可共享的数据集合。
4. 数据库管理系统（DBMS）: 位于用户与操作系统之间的数据管理软件。
    1. 主要包含
    + 数据定义
    + 数据操作
    + 数据库的运行管理
    + 数据库的创建和维护
5. 数据库系统（DBS）: 有组织地、动态的存储大量关联数据、方便多用户访问的计算机硬件、软件和数据资源组成的系统。
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-141948.png)
<center style="color: #06f;">数据库系统构成</center>

## 如何描述数据
现实中的事物，就是真真实实存在的，我们需要三个步骤将现实中的事物转化为计算机所认识的数据
1. 现实世界<br>
将现实世界中客观存在的事物和它们所具有的特征抽象成信息世界的实体和属性
2. 信息世界<br>
抽象化的信息世界，利用实体-联系（E-R）方法反应事物与机器世界之间的相互关系
3. 机器世界<br>
实体-联系方法表达的概念模型转化为机器世界的数据模型
<div align=center><img src="https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-143737.png"></div>

## 数据模型
数据库管理系统主要根据数据模型对数据进行存储和管理。<br>
数据模型是数据库的基础和关键
::: info 数据模型有
+ 层次模型
+ 网状模型
+ 关系模型
:::

### 层次模型
+ 概念: 将数据用一对多的组织方式组织起来的结构就是层次模型
+ 特点: 
    存取方便且速度快
    结构清晰
    容易理解
    检索路线明确
    数据修改和扩容容易实现
+ 缺点:
    不能表示多对多的关系
    结构不够灵活
    数据冗余
+ 图示
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-145427.png)

### 网状模型
+ 概念: 记录之间可以任意多的链接
+ 特点: 
    具有多对多类型的数据组织
    结构清晰
+ 缺点:
    因使用指针表示关系，使得数据量大大增加，数据修改不方便
    建立维护成本较大
+ 图示
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-150509.png)

### 关系模型
+ 概念: 以记录或者二维数据表的形式组织数据，不分层也无指针。
+ 特点: <br>
    每一列对应实体的一个属性<br>
    每一行形成一个由多个属性组成的元组也称记录<br>
    结构灵活
    可满足各种计算
    能搜索、组合、比较不同类型的数据
    增删数据方便
    数据具有较高的独立性和更好的安全性
+ 缺点:
    数据量非常大的时候，查找起来比较繁琐
+ 图示
![](https://photohosting.oss-cn-hangzhou.aliyuncs.com/captures/mysql/QQ20230318-151919.png)


## 关系型数据库操作语言
**SQL(Structured Query Language)** 结构化查询语言。数据库查询和程序设计语言<br>
**作用:** 存取数据以及查询、更新和管理关系性数据库系统，<br>
**包括:** 数据定义语言（DDL）、数据操纵语言（DML）、数据控制语言（DCL）

### 数据定义语言(DDL)
主要用于执行 **数据库任务** 对数据库以及数据库中各种对象进行创建、修改、删除操作。
<!-- 让表格居中显示的风格 -->
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="center">

| 语句  | 功能  | 
| :---: | :---: |
|   CREATE   |   创建数据库或数据库对象   | 
|   ALTER   |   修改数据库或数据库对象   |
|   DROP   |   删除数据库或数据库对象   | 
<p align="center"><font face="黑体" size=2.>表1 DDL主要语句以及功能</font></p>
</div>

### 数据操纵语言(DML)
主要用数据表或视图的检索、插入、修改和删除数据记录的操作
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="center">

| 语句  | 功能  | 
|   :---:    |       :---:          |
|   SELECT   |   从表或视图中检索数据   | 
|   INSERT   |   将数据插入表或者视图   |
|   UPDATE   |   修改表或视图中的数据   | 
|   DELETE   |   删除表或视图中的数据   |
<p align="center"><font face="黑体" size=2.>表2 DML主要语句以及功能</font></p>
</div>

### 数据控制语言(DCL)
主要用于安全管理。确定那些用户可以查看或修改数据库中的数据
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="center">

| 语句  | 功能  | 
| :---: | :---: |
|   GRANT   |   授予权限   | 
|   REVOKE   |   撤销权限   |
|   DENY   |   拒绝权限，并禁止从其他角色继承许可权限   | 
<p align="center"><font face="黑体" size=2.>表3 DCL主要语句以及功能</font></p>
</div>

<CopyRight/>