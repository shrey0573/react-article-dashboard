const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/admin',
    proxy({
      target: 'https://api.onecricket.app',
      changeOrigin: true,
    })
  );
};