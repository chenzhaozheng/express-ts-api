
# `项目简介`

### 参考 https://github.com/Microsoft/TypeScript-Node-Starter.git
### 重新定义Express +TypesScript，专为API而开发

## `特性`

*  整合统一的报错机制，全局报错处理, 防止异常导致进程中断
*  统一路由文件管理，自动检测路由目录
*  所有业务代码都在src目录编写

## `命名规范`

* 单词小写，单词之间用 '-' 分隔
* 名词在前，动词在后
* 相同模块描述在前，不同描述在后


## `Migrations - 数据库迁移`
* 在`src`文件里，执行命令`npx sequelize-cli model:generate --name UserBak --attributes firstName:string,lastName:string,email:string`
* https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/migrations.md
* npx sequelize db:migrate

## `数据库查询方式`

* https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html

## `功能`
1. 日志记录抽离，便捷
* 关于日志这里因为使用了pm2所以日志都是保存在logs/*的文件中,其它主业务的日志都是通过util/logger里的工具方法来写入
2. 队列结合，模块化管理模块
* 结合rabbitmq来做一些任务队列操作
3. 主功能抽离业务类型
* 分割service层
4. 可热拔插式设计
5. 采用统一.env配置，隔离代码和配置
6. 采用Commander命令行管理数据库
7. 采用resultful接口规范
8. 中间件过滤参数，统一分页配置参数，用户权限拦截

## `目前实现与问题`
1. 可升级空间有多少？
* 后期会考虑改用为装饰器和类的方式进行重构
2. 异常与堆栈管理，是否方便分析问题
* 后续采用alinode进行监控
3. 如果多个同类型数据库怎么设置
* 后续支持
4. Ts管理的目的在于什么，是否加大了复杂性
* 规范文件结构，恢复
5. 是否能做基础框架，是否可去除一些不需要的模块，是否做包管理
* 可能性不大，比较重接口开发的方向，基础框架需要处理
6. 接口规范？
* 目前采用resultful接口规范
7. 生成命令方便性？
* 采用Commander命令行接口的解决方案
8. 接口回调的全局控制
* 中间件过滤参数，统一分页配置参数
* 用户权限拦截器
9. 怎么解决ts兼容性问题
* 定义types/base.d.ts declare module解析一些没用ts写的类型，可以用import引入


