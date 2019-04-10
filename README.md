# 吉姆音乐厅

![http://oss.bstu.cn/images/20190403/0lctopfhhe5e49tp.png](http://oss.bstu.cn/images/20190403/0lctopfhhe5e49tp.png)

> 接口来自酷狗

## Dev Setup

``` bash
# 安装
npm install

# 启动web
npm run dev

# 访问
localhost:8080

or

# 启动桌面版
npm run build:eleDev

# 运行
npm run ele:dev

```

## Build Setup

``` bash

# 打包web

npm run build:prod  # 线上

# 复制对应打包命令生成的文件到线上环境

> dist/prod

or

# 打包桌面版
npm run build:eleProd

# 打包应用程序
npm run ele:package:win64

# 复制package文件夹中对应的应用程序(打开运行exe)

> package/吉姆音乐厅-win32-x64

```

## 项目结构

```

# 开发环境文件
music-client
  config                // 配置文件
  dist                  // 打包文件夹
  package               // 应用程序打包文件夹
  src                   // 项目入口
    actions             // 状态管理器actions
    api                 // 接口
    components          // 页面模块
    public              // 资源
    reducers            // 状态管理器reducers
    bundle.js           // react路由切割
    config.js           // 路由菜单
    defined.less        // 默认样式
    index.js            // 主入口
    store.js            // 状态管理器
    theme.scss          // 主题样式
  static                // electron资源
  .babelrc              // babel配置
  index.html            // html模板
  main.js               // electron主入口
  package.json          // 插件配置
  postcss.config.js     // 样式兼容
  webpack.config.js     // 打包配置

# 线上环境文件(打包完成后，Jenkins或复制以下文件到线上访问即可)
music-client
  dist
    prod                // 打包生成线上文件

# 打包应用程序
music-client
  dist
    ele                 // electron用来打包的文件
  package               // 应用文件夹
    app-win32-x64       // 应用1
    吉姆音乐厅-win32-x64 // 应用2

```

## 项目主要插件

插件名称|描述
----|----
antd|UI框架
axios|http请求
redux|状态管理器
nprogress|加载条
electron ~1.7.8|桌面版

