module.exports = function(app) {
    const blog = require('../controllers/blog.controller.js');
    app.put('/api/update', blog.updateByReg);
  }