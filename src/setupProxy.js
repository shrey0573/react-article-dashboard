// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/admin',
    createProxyMiddleware({
      target: 'https://api.onecricket.app',
      changeOrigin: true,
    })
  );
};