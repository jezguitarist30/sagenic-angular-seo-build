const path = require('path');
const fs = require('fs');
const express = require('express');
const compression = require('compression');
const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const app = express();
const port = Number(process.env.PORT || 3000);

require('zone.js/dist/zone-node');

var hash;
fs.readdirSync(path.join(__dirname, 'server')).forEach(file => {
  if (file.startsWith('main')) {
    hash = file.split('.')[1];
  }
});

const AppServerModuleNgFactory = require('./server/main.' + hash + '.bundle').AppServerModuleNgFactory;

const template = fs.readFileSync(path.join(__dirname, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };
 
  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
 });

 
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'browser'));


// // console.log(path.join(__dirname, 'browser'));

app.use((req, res, next) => {
    console.log('logging...');
    next();
});

// // //app.use('/', express.static(path.join(__dirname, '/browser'), {index: false}));
app.get(express.static(path.join(__dirname, 'browser')));

app.get('/*', (req, res) => {      
  res.render('index', { req: req });
});

// // // // app.get('/*', function (req, res) {
// // // //   res.render('index', {
// // // //     req: req,
// // // //     // res: res
// // // //   });
// // // // });

app.listen(port, function() {
  console.log(`Listening at ${port}`);
});