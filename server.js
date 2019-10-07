const express = require('express');
const bodyParser = require ( 'body-parser' );
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT
const serveStatic = require('serve-static');
const path = require('path');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
require('dotenv').config();


mongoose.connect('mongodb://localhost:27017/photoapp', { useNewUrlParser: true }, );
mongoose.connection.once('open', function(){
      console.log('Conection has been made!');
    }).on('error', function(error){
        console.log('Error is: ', error);
    });

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))
app.use( bodyParser.json() );
app.use( express.static ( 'public' ) );



app.get('/', ( req, res )=>{
  res.render('./homepage/index.ejs');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode");
});