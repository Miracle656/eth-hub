const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://newsapi.org/v2/everything?q=web3&apiKey=d8addbb941e94ffca0f7086b6c4e0e2a', // The base URL of the News API
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove the '/api' prefix when making requests
    },
  }));
};
