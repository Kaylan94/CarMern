module.exports = function(app) {
    const blog = require('../controllers/blog.controller.js');
    app.delete('/api/delete', blog.deleteBlogsByReg);
  }
  