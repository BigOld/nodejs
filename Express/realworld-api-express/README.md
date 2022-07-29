
## 目录结构
```
  config # 配置文件
    config.default.js
  controller # 用于解析用户的输入，处理后返回相应的结果
  model # 数据持久层
  middleware # 用于编写中间件
  router # 用于配置 URL 路由规则
  util # 工具模块
  app.js # 用于自定义启动时的初始化工作
```

## 配置常用中间件
* 解析请求体
  * express.json()
  * express.urlencoded()
* 日志输出
  * morgan()
* 为客户端提供跨域资源请求
  * cors()

## JWT 身份认证
https://www.yuque.com/lipengzhou/dev/mzmagk