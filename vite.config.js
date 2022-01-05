import vue from '@vitejs/plugin-vue'

export default {
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    },
    server: {
        cors: true, // 默认启用并允许任何源
        open: true, // 在服务器启动时自动在浏览器中打开应用程序
        //反向代理配置，注意rewrite写法
        proxy: {
            '/getLocation': {
                target: 'https://apis.map.qq.com/',   //代理接口(腾讯定位api)
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/getLocation/, '')
          },
        }
    }
}