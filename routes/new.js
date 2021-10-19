module.exports = function(app) {
    const blog = require('../controllers/blog.controller.js');
    app.post('/api/add', blog.create);
  }