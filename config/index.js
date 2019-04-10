// 开发
const dev = {
  NODE_ENV: 'development', // 在webpack中它的用途是判断生产环境或开发环境的依据
  dist: '', // 打包后文件生成的位置
  publicPath: '', // 资源引用文件前缀
  url: { // 自定义api前缀(在webpack的插件DefinePlugin中配置为URL,即可在项目中直接URL.baseURL来使用)
    baseURL: '"http://localhost:3007"', // 默认api前缀
  }
};

// 开发桌面端
const eleDev = {
  NODE_ENV: 'production',
  dist: './dist/ele',
  publicPath: './',
  url: {
    baseURL: '"http://localhost:3007"',
  }
};

// 线上桌面端
const eleProd = {
  NODE_ENV: 'production',
  dist: './dist/ele',
  publicPath: './',
  url: {
    baseURL: '"https://api.bstu.cn"',
  }
};

// 线上
const prod = {
  NODE_ENV: 'production',
  dist: './dist/prod',
  publicPath: 'https://i.bstu.cn/static/music-client/',
  url: {
    baseURL: '"https://api.bstu.cn"',
  }
};

module.exports = {
  dev,
  eleDev,
  eleProd,
  prod,
};
