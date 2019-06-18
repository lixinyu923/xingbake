# vue_demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
下载依赖包
npm install

# serve with hot reload at localhost:8080
启动服务
npm run dev

# build for production with minification
打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


===========================
#### 项目介绍
```
本项目是一个公司内部的加班休假提交审核系统，
运用vue框架结合vuex以及vue自带的路由器（vue-router）来进行开发。
此间与后台紧密配合，通过接口进行详细的匹配以及多次验证。
以便员工更加方便快捷的是使用
```

#####技术栈
1. vue  框架
2. axios   Axios 是一个基于 promise 的 HTTP 库
3. vuex  数据的统一管理
4. vue-router vue的官方路由器 
5. flex h5样式
6. scss

#####环境依赖
node 
express
mysql

####部署步骤
```
1. 添加系统环境变量
    export $PORTAL_VERSION="production" // production, test, dev

2. npm install  //安装node运行环境

3. gulp build   //前端编译

4. 启动两个配置(已forever为例)
    eg: forever start app-service.js
        forever start logger-service.js

5. git clone git@github.com:lixinyu923/xingbake.git  //仓库地址
```


### 目录结构描述

│  index.html
│  package-lock.json
│  package.json   //配置
│
├─build     //webpack
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│
├─config
│      dev.env.js
│      index.js  //做跨域请求代理
│      prod.env.js
│
├─dist  //打包生成
│  │  index.html
│  │
│  └─static
│      │  font.zip
│      │
│      ├─css
│      │      app.1cb6c752d519758a8948954718faa798.css
│      │      app.1cb6c752d519758a8948954718faa798.css.map
│      │
│      ├─font   //使用的icon字体
│      │
│      ├─js
│      │ 
│      └─scss  //使用的scss插件
│              common.scss
│              _minix.scss
│
├─src   //开发
│  │  App.vue
│  │  main.js
│  │
│  ├─assets
│  │      logo.png
│  │
│  ├─components
│  │  │  PopUp.vue //点击按钮的组件
│  │  │
│  │  └─alertDialog  //弹出框组件
│  │          index.vue
│  │
│  ├─directives
│  ├─plugins   //实例弹出框
│  │      elou.js
│  │
│  ├─router //配置路由
│  │      index.js  
│  │
│  ├─store
│  │  │  index.js
│  │  │
│  │  └─modules
│  │          user.js
│  │
│  ├─utils  //公用的工具
│  │      flexible.js  //样式使用
│  │      request.js  //请求使用
│  │
│  └─views
│      ├─AddList  //申请表的添加页
│      │      index.vue
│      │
│      ├─Detail  //详情页
│      │      index.vue
│      │
│      ├─Home  //项目的主页
│      │  │  index.vue
│      │  │
│      │  └─components //项目组件
│      │          tabMenu.vue  //tab切换的菜单
│      │          TabType.vue  //tab切换的类型
│      │          TodoList.vue  //列表组件
│      │
│      └─Login
│              index.vue  //登陆页面
│
└─static   //静态资源
    │  .gitkeep
    │  font.zip
    │
    ├─font  //使用得到icon字体
    │   
    │
    ├─img
    │      加班申请表.PNG
    │      弹出框.PNG
    │      点击添加列表按钮和遮罩层.PNG
    │      申请表.PNG
    │      申请表2.PNG
    │      首页1.PNG
    │      首页2.PNG
    │      首页3.PNG
    │
    └─scss
            common.scss
            _minix.scss

###部分截图
![image](./static/img/首页1.png)
![image](./static/img/申请表.png)
![image](./static/img/弹出框.png)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
