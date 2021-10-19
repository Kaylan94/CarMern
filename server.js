const express = require('express');
const path = require('path');
const bodyParserJ = require('body-parser').json();
const bodyParserU = require('body-parser').urlencoded({ extended: false });
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const db_pass = process.env.db_password;
const app = express();

app.use(bodyParserJ);
app.use(bodyParserU);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/new.js')(app);
require('./routes/home.js')(app);
require('./routes/delete.js')(app);
require('./routes/update.js')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
  });

  const uri = `mongodb+srv://Kaylan94:4xnGJJn2rhw3P7R@hyperion-king-94.tlzbn.mongodb.net/KingDB94?retryWrites=true&w=majority`;
  mongoose.Promise = global.Promise;
  
  mongoose.connect(uri, {
    useNewUrlParser: true
    });
  
  mongoose.connection.on('error', function() {
    console .log( 'Connection to Mongo established.' );
    console .log( 'Could not connect to the database. Exiting now...' );
    process.exit();
  });
  
  mongoose.connection.once('open', function() {
      console.log("Successfully connected to the database");
  })
  
  
  module.exports = app;
