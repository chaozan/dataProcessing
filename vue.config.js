// module.exports = {
//   devServer: { 
//     port: '9527', //代理端口
//     open: false, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
//     proxy: {
//         '/api': {
//             target: 'http://api.yesapi.cn',
//             changeOrigin: true, //是否跨域
//             pathRewrite: { //重写路径
//                 'http://localhost:8080/api': 'http://api.yesapi.cn'  // 或 者 'http://localhost:8080/api'
//             }
//             // 既然我们设置了代理，则所有请求url都已写成/api/xxx/xxx，那请求如何知道我们到底请求的是哪个服务器的数据呢
//             // 因此这里的意义在于， 以 /api开头的url请求，代理都会知道实际上应该请求那里，
//             // ‘我是服务器/api’，后面的/api根据实际请求地址决定，即我的请求url：/api/test/test，被代理后请求的则是
//             // https://我是服务器/api/test/test
//         }
//     }
// },
// }