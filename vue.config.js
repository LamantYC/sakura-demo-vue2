const path = require('path'); // 引入nodejs的path模块
const resolve = dir => path.join(__dirname, dir); // resolve方法用来加载路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'; // 判断当前为开发环境还是打包环境, '/'意思是代表指定在域名的根目录下，如果要指定到iview-admin下就这样写'/iview-admin/', production为生产坏境，development为开发环境

module.exports = {
    lintOnSave: false,                          // 取消每次保存时都进行一次' ESLint '检测
    publicPath: BASE_URL,                       // 项目的基本路径,vuecli2.0时打包经常静态文件找不到，就是需要配置这个属性为'./'
    chainWebpack: config => {                   // 配置Webpack
        config.resolve.alias
            .set('@', resolve('src'))                 // 引入文件时候“ @ ”符号就代表src
            .set('_c', resolve('src/components'));     // 引入组件文件夹中的文件就可以用“ _c ”代替src/components

        config.module                             // 添加iview-loader
            .rule('vue')
            .use('iview')
            .loader('iview-loader')
            .options({ prefix: false })
    },
    productionSourceMap: false,                 // 打包时不生成.map文件，会减少打包体积，同时加快打包速度
    devServer: {                                // 跨域有2种解决方案： 1. 在后端的header中配置， 2. 使用devServer来配置代理解决跨域
        proxy: 'http://localhost:3000/'           // 这里写需要代理的URL,这里会告诉开发服务器，将任何未知请求匹配不到静态文件的请求，都代理到这个URL来满足跨域
    }
}
