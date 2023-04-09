---
title: 数据表操作
---      

# {{ $frontmatter.title }}

::: tip 话不多说，先来个小曲
<Iframe src="//music.163.com/outchain/player?type=2&id=1396568325&auto=1&height=66"></Iframe>
:::

## 简单理解表结构
数据库中的表是组织和管理数据的基本单位，数据库的数据保存在一张张表中，数据库的各种开发和管理都依赖于锁创建的每一张表。<br>

表是由**行**和**列**，组成的二位表结构。
**行：** 称为记录
**列：** 称为记录<br>

## 表中的数据类型

### 1、整型

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

| 类型              | 存储空间\(字节\) | 最小值          | 最大值          |
|:---------------:|:----------:|:------------ |:------------ |
| tinyint         | 1          | 有符号\-128(-$2^7$)<br> 无符号$0$     | 有符号127($2^7 - 1$)<br> 无符号255($2^{8} -1$)      |
| smallint        | 2          | 有符号\-32768 (-$2^{15}$)<br> 无符号$0$  | 有符号32767<br> 无符号65535($2^{15} -1$)     |
| mediumint       | 3          | 有符号\-8388608(-$2^{23}$)<br> 无符号$0$ | 有符号8386607<br> 无符号($2^{24} - 1$)   |
| int\(interger\) | 4          | 有符号(-$2^{31}$)<br> 无符号$0$  | 有符号($2^{31} - 1$)<br> 无符号($2^{32} - 1$) |
| bigint          | 5          | 有符号(-$2^{63}$)<br> 无符号$0$  | 有符号($2^{63} - 1$)<br> 无符号($2^{64} - 1$) |
<p align="center"><font face="黑体" size=2.>表1 整数类型</font></p>
</div>

类型选取规则：在选择存储类型的时候，能确定其范围的选择，合适的就行，不太确定的，尽量选稍微大一点的。<br>
语法格式：`int[(m)] [unsigned] [zerofill]`<br>
（1）m: 指定数据的现实宽度。默认为11<br>
（2）unsigned: 指定数据为无符号数据。<br>
（3）zerofill: 在数字位不够的空间用字符“0”填充。 配合unsigned参数使用


### 2、浮点型



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

| 类型          | 存储空间(字节) | 最小值                      | 最大值 |
|-------------|----------|--------------------------|:--------:|
| float\(m,d\)  | 4          | 士1\.175494351E一38          | 士3\.402823466E\+38         |
| double\(m,d\) | 8          | 士2\.2250738585072014E\-308 | 士1\.7976931348623157E\+308 |


<p align="center"><font face="黑体" size=2.>表1 DDL主要语句以及功能</font></p>
</div>

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

| 类型          | 存储空间(字节) | 最小值                      |
|-------------|----------|--------------------------|
| dec(m,d) <br> decimal(m,d)  | m+2        | 最大取值范围与double相同，给定decimal的有效气取值范围由m和d决定         |


<p align="center"><font face="黑体" size=2.>表1 DDL主要语句以及功能</font></p>
</div>

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

| 类型          | 存储空间(字节) | 最小值                      | 最大值                      |
|-------------|----------|--------------------------|--------------------------|
| bit(m)  | 1~8        | bit(1)         | bit(64)         |


<p align="center"><font face="黑体" size=2.>表1 DDL主要语句以及功能</font></p>
</div>


### 3、日期类型
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

| 类型        | 存储空间\(字节\) | 最小值                   | 最大值                        |
|:---------:|:----------:|:---------------------:|:--------------------------:|
| data      | 4          | 1000\-01\-02          | 士3\.402823466E\+38         |
| time      | 8          | 1000\-01\-02 00:00:00 | 士1\.7976931348623157E\+308 |
| datetime  | 4          | 19555222133           | 2038                       |
| timestamp | 3          | \-838:59:59           | 838:59:59                  |
| year      | 1          | 1901                  | 2155                       |

<p align="center"><font face="黑体" size=2.>表1 DDL主要语句以及功能</font></p>
</div>

各种数据类型的使用区别如下。
（1）date用来表示年月日，以yyyymm-dd格式显示。
（2）datetime 用米表示年月日时分秘，以yyyy mm dd hih.mam：ss格式显示
（3）time 用来表示时分秒，以hb:mom：ss格式显示。
（4）timestamp用于更新日期为当的系统时间。dimestamp 值返回后现实为 yyyy-mm-dd hh:mm:ss格式的字符串，显示宽度固定为 19 个字符。如果想要获得数字值,应在 timestamp 列添加十0。
（5）year[(2|4)]了表示年份，默认是4位格式。在4 位格式中，允许的值是1901~2155 和0000。在2位格式中，允许的值是 70～69，表示从 1970~2069年。MysQl-以yyyy格式显示 year 值。

### 4、字符串类型
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


## 表操作

### 1、表创建
（1）语法
```sql

CREATE TABLE [IF NOT EXISTS] 表名
(
    列名1   数据类型和长度  [列属性]
    列名1   数据类型和长度  [列属性]
     ·          ·           ·
     ·          ·           ·
    列名1   数据类型和长度  [列属性]
)[table_options]
```
（2）参数说明
+ 表名： 为要创建的数据表的名称，表的名称不能重复。
+ 列属性
```sql
[NOT NULL | NULL][DEFAULT default_value]
[AUTO_INCREMENT][UNIQUE[KEY] | [PRIMARY]KEY]
```
+ table_options
```sql
{ENGINE | TYPE} = engine_name
| AUTO_INCREMENT= value|
| AVG_ROW_LENGTH = value|
```


### 2、表查看
使用`show tables`命令查看所有的表和视图信息，语法格式：
```sql
SHOW TABLES; -- 查看所有的表

SHOW [FULL] TABLES [{FROM | IN} 数据库名]
     [LIKE 'pattern' | WHERE expr]

```
参数说明：<br>
（1）FULL。以完整格式显示表的名称和表的类型。<br>
（2）TABLES。 显示数据库中所有的基本表和视图。<br>
（3）数据库名。要查看的数据库名。<br>
（4）LIKE 子句。确定要查看的数据表名称给定的条件。<br>
（5）WHERE 子句。确定要查看的数据表名称给定的条件。<br>

**查看表结构**
```sql
DESC table_name;
```

**查看表的详细定义:**
```sql
SHOW CREATE TABLE table_name;
```


### 3、表修改
#### 添加列
语法：
```sql
ALTER TABLE table_name
    ADD [column] 列定义 [first | after 列名]

-- 例子
ALTER TABLE department
    add (
        personnum int null,
        office varchar(50) null
    );
```

#### 删除列
语法
```sql
ALTER TABLE table_name
    DROP [column] 列名

-- 例子
alter table department drop personnum;
```


#### 修改表定义
语法
```sql
alter table table_name
    modify [column] 列名  列属性;

-- 例子
alter table department
    modify column manger varchar(20);
```

#### 修改列名
语法
```sql
alter table table_name
    change 原列名 新列明 列属性;

-- 例子
alter table department
    change manger mangername char(8);
```

#### 修改表名称
语法
```sql
alter table 原表名 rename [to] 新表名;

-- 例子
alter table department rename to new department;
```


### 4、表删除
语法：
```sql
drop table table_name;

-- 例子
drop table department;
```

## 数据表约束
数据完整性是指数据的精确性和可靠性。主要保证数据库中数据的质量。这是为防止数据库中存在不符合语义规定的数据和因错误的输入/输出造成无效操作或报错而提出的。

::: info 什么是约束?
约束，是MySQL提供的自动保持数据库完整性的一种方法，约束就是限制。<br>
定义约束就是定义可输入表或表的单个列中的数据的限制方法。
:::


::: tip 约束的分类?
<table>
	<tr>
	    <td style="text-align: center;" >完整性类型</td>
	    <td>约束类型</td>
	    <td>描述</td>  
        <td>约束对象</td>
	</tr >
	<tr >
	    <td rowspan="3">列完整性</td>
	    <td>NOT_NULL</td>
        <td>列的值不能为空</td>
        <td rowspan="3">列</td>
	</tr>
	<tr>
	    <td>AUTO_INCREMENT</td>
        <td>列的值自动增加</td>
	</tr>
	<tr>
	    <td>DEFAULT</td>
        <td>当使用INSERT语句插入数据时，若已定义默认值的列没有提供指定值，则将默认值插入记录中。</td>
	</tr>
	<tr>
	    <td rowspan="2">实体完整性</td>
	    <td>PRIMARY KEY</td>
       <td>每行记录的唯一标识，不能为空，不能重复</td>
       <td rowspan="2">行</td>
	</tr>
	<tr>
       <td>UNIQUE</td>
	    <td>表中不允许有两行的同一列包含相同的非空值</td>
	</tr>
	<tr>
	    <td>参考完整性</td>
	    <td>FOREIGN KEY</td>
       <td>定义一列或多列</td>
       <td>表与表之间</td>
	</tr>
	
</table>

:::

::: info 约束名字
为了便于管理约束，在创建约束时，需创建约束的名称，约束名称必须符合标识符的命名规则。使用约束类型和其完成任务的从向组合作为约束名。例如，对客户表的主键，使用 PK_ customer。
:::


::: info 约束格式
创建约束的语法格式如下。
```sql
CREATE TABLE 表名
（列定义[{，列定义1表约束}]）
```
各参数说明<br>
(1）表名是合法标识符，最多可有 128 个字符，如s、SC.C 等，不允许重名。<br>
(2）列定义：：一列名 数据类型 〔{列约束)〕。<br>
在MysQL 中,对于基本表的约束分为列约束和表约束。
(1）列约束是对某一个特定列的约束，包含在列定义中，直接跟在该列的其他定义之后,用空格分隔，不必指定列名。<br>
(2）表约束与列定义相互独立，不包括在列定义中，通常用于对多个列一起进行约束，用逗号分隔表级约束，定义表约束时必领指出要约束的那些列的名称。
:::

## 表中数据的操作

### 1、插入记录
插入语句的两种使用形式：<br>
（1）插入一条记录<br>
（2）插入多条记录<br>
```sql
insert into table_name [(column_list)]
{values | value} ({default | null | expression}[, ...n])

-- values： 插入多条记录
-- value： 插入一条记录
```
说明：<br>
(1）如果列定义了默认值，可以在值中以DEFAULI 来代替具体的值。<br>
(2）插入数据的列列表与值列表的数据类型和顺序要保持一致。<br>
(3）自增列无须输入数据，自动编号。<br>
(4）输入值为宇符型数据和日期型数据时，要添加单引号。<br>

2．利用 SELECT 子查询插入多行数据
在 INSERT 语句中使用 SELECT 子查询可以同时插人多行。INSERT 语句结合
SELECT 子查询可将一个或多个表或视图中的值添加到另一个表中,语法格式如下。
```sql
INSERT [ IGNORE] [ INTO]
表名 I(column 1ist)]
[SELECT column_list
EROM table_ list WHERE search_ condit ion]
```
其中,IGNORE 参数用于忽略会导致重复关键字错误的记录。

3.使用LOAD 子句批量录入数据<br>
如果需要向一个表中添加大量的记录,使用 SQL语句输人数据是很不方便的。
MysQL 提供了 LOAD DATA INFILE 语句，用于高速地从一个文本文件中读取行，并装人一个表中。文件名称必领为一个文本字符串。其语法格式如下。1
```sql
LOAD DATA ILOCALJ INEILE 'file name. txt'
[REPLACE | IGNORE] INTO TABLE 表名

```
其中，如果 LOCAL 没指定，文件必须位于服务器上。出于安全原因,当读取位于服务器上的文本文件时，文件必须处于数据库目录或可被所有人读取。另外,用户在服务器主机上必领有file 的权限。
当在服务器主机上寻找文件时，服务器使用下列规则。<br>
(1）如果给出一个绝对路径，服务器直接使用该路径。<br>
(2）如果给出一个相对路径,服务器相对数据库文件所在目录搜素文件。<br>
(3）如果仅给出一个文件名，服务器仅在当前数据库文件所在目录中寻找文件。<br>

当读取输人值时,默认值会使 LOAD DATA INFILE 按以下方式运行。<br>
(1）在新行处寻找行的边界。<br>
(2）不跳过任何行前缀。<br>
(3）在制表符处把行分解为列。<br>
(4）不希望列被包含在任何引号宇符之中。<br>
(5）出现制表符(1）、新行（1n）、或)\时，将其视为文本字待作为值的一部分。<br>

### 2、查询记录
因为查询比较繁琐，这里只简单介绍一下查询操作，在后续中有更为详细的内容
```sql
select * from table_name;
```

### 2、更新记录 
在表中的更新是使用 Update 语句实现的。<br>
语法格式为:
```sql
update 表名 | 视图
    set 列名1 = 表达式[,列名2 = 表达式]
    [from 表源]
    [where 查询条件]
```

### 3、删除记录
在表中的删除是使用 delete 语句实现的。<br>
```sql
delete from 表名 | 视图
    [where 查询条件]
```

<CopyRight/>




