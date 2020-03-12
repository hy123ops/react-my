const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      // target: 'http://localhost:9000/',
      target: 'https://m.maoyan.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}