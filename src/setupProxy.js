const { createProxyMiddleware } = require('http-proxy-middleware'); //注意写法，这是1.0以后的版本

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/ws1', {
      target: 'http://192.168.176.172:8080',
      pathRewrite: {
        '^/ws1': '',
      },
      changeOrigin: true,
      secure: false, // 是否验证证书
      ws: true, // 启用websocket
    })
  );
  app.use(
    '/apc',
    createProxyMiddleware({
      target: 'https://api.inews.qq.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/apc': '',
      },
    })
  );
};
