# 常用一些 Git 命令

::: tip 话不多说，先来个音乐
<Iframe mylink="//music.163.com/outchain/player?type=2&id=1950343972&auto=1&height=66"> </Iframe>
:::

## 使用 SSH 进行克隆和提交
1. 首先在 GitHub 中添加在本地生成的Key
> 这是 GitHub 上的[官方文档](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
主要就是运行下面的这个命令
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"  
```
这是我的执行结果
```sh
sophia:~/ $ ssh-keygen -t ed25519 -C "3485615034@qq.com"             
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/sophia/.ssh/id_ed25519): 
Enter passphrase (empty for no passphrase): # 输入你Github的密码
Enter same passphrase again: # 确定密码，
Your identification has been saved in /home/sophia/.ssh/id_ed25519
Your public key has been saved in /home/sophia/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:fjPuJ4lmSgvE1o0VG+m/fEYqYC9z5fL7LSW1Jfv52us 3465615034@qq.com
The key's randomart image is:
+--[ED25519 256]--+
|        .        |
|         o .     |
|        . +      |
|   . . + . .  . o|
|    + o S .    +o|
|   o   .o  .. +..|
|    . ...+++.o +.|
|     o .*oB++.++.|
|      o+ =o*==+E*|
+----[SHA256]-----+

```

执行完命令后，就会在你的home目录中创建了一个 `.ssh` 的文件夹，其中`.pub`为公共密钥，只需要把它里面的内容复制出来。

2. 添加到 GitHub 中<br>
复制 `.ssh` 中的 `xxx.pub` 中的内容，在github中这个[链接](https://github.com/settings/keys)中新建一个key,这样我们就可以使用ssh的方式进行克隆和push了。

## 修改git默认工具
> 我习惯使用 kdiff3，可以换成其他的。
1. 修改merge

```sh
git config --global merge.tool kdiff3
```

2. 修改 core
```sh
git config --global core.editor vim
```

3. 修改diff
```sh
git config --global diff.tool kdiff3
```
4. 修改后的结果
```sh
[user]
	name = qiananran
	email = 3465615034@qq.com
[merge]
	tool = kdiff3
[core]
	editor = vim
[diff]
	tool = kdiff3
```
## 克隆与提交
使用 ssh 方式克隆和提交比较方便的一点就是，我们在提交的时候不需要我们再次输入我们github的用户名和密码。
### 克隆
```sh
git clone 仓库名
```

### 提交
将我们修改后的项目，提交到远程仓库中进行存储管理
```sh
git add . # 

git commit -s 

git push 

```

## 分支的创建和融合
### 查看现有分支
```sh
git branch
```

### 创建分支
```sh
git branch config # config 为分支的名称，可以随意更改
```

### 切换分支
```sh
git checkout config # config 为你要切换的分支名
```

### 融合分支
```sh
git checkout master # 切换回主分支

git merge config -m config # 第一个config表示你的分支名，第二个config表示对这次的融合说明一下
```

<CopyRight/>