# 奋斗记网页版

## 构建

- web用npm script，在package.json中scripts字段可以找到所有命令，暂不使用测试。
开发用npm run start，可简写为npm start。
- app用ionic-cli，安装后输入ionic即可查询所有命令。开发用ionic serve

## 版本问题

ionic基于angular，使用的版本上有所延迟，使用2.2，是目前ionic最新版本。
web使用angular2.4，是目前angular最新版本。为与官网教程保持一致，使用不同angular版本开发。

angular的持续更新使得许多语法旧版本无法支持，基础环境中web版已对http、router等模块进行了测试。

版本更新需讨论确定。

## gitflow

使用gitflow进行git管理，master为稳定版本，dev为开发分支，不在dev上开发，开发需新建分支。
新建分支主要分为两类，一类为功能，使用feature开头，一类为修复bug，以fixbug开头。

如添加readme的说明，认为其是功能，新建分支feature/readme，完成后提交，再merge request到dev。发现
readme出了问题时，新建一个fixbug/readme分支，完成后提交，再merge request到dev。

自己新建的feature、fixbug分支提交前需自己测试相关功能。dev分支可共同测试，dev测试后方可merge request
到master分支。

## 资料

[ionic官网](https://ionicframework.com/docs/)

[angular官网](https://angular.cn/docs/ts/latest/)

[google](http://google.com.hk/) 请勿使用百度。
