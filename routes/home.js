module.exports = function(app) {
  const blog = require('../controllers/blog.controller.js');
  app.get('/api/home', blog.findAll);
}