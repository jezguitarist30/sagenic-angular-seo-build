// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const compression = require('compression');
// const ngExpressEngine = require('@nguniversal/express-engine').ngExpressEngine;
// const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
// const core = require('@angular/core');

// require('zone.js/dist/zone-node');

// core.enableProdMode();

// const app = express();
// const port = Number(process.env.PORT || 3000);

// var hash;
// fs.readdirSync(path.join(__dirname, 'server')).forEach(file => {
//   if (file.startsWith('main')) {
//     hash = file.split('.')[1];
//   }
// });

// const AppServerModuleNgFactory = require('./server/main.' + hash + '.bundle').AppServerModuleNgFactory;

// const template = fs.readFileSync(path.join(__dirname, 'browser', 'index.html')).toString();

// app.engine('.html', (_, options, callback) => {
//   const opts = { document: template, url: options.req.url };
 
//   renderModuleFactory(AppServerModuleNgFactory, opts)
//     .then(html => callback(null, html));
//  });


// app.set('port', port);
// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'browser'));

// // // console.log(path.join(__dirname, 'browser'));

// app.use((req, res, next) => {
//     console.log('logging...');
//     next();
// });

// function cacheControl(req, res, next) {
//   // instruct browser to revalidate in 60 seconds
//   res.header('Cache-Control', 'max-age=60');
//   next();
// }

// app.use('/', cacheControl, express.static(path.join(__dirname, 'browser'), {index: false, maxAge: 30}));
// //app.use('/',express.static(path.join(__dirname, 'browser'), { index: false }));

// function ngApp(req, res) {  
//   res.render('index', {
//     req,
//     res,
//     preboot: false, // turn on if using preboot
//     baseUrl: '/',
//     requestUrl: req.originalUrl,
//     originUrl: `http://localhost:${ app.get('port') }`
//   });
// }

// app.get('/', ngApp);

// // // // // app.get('/*', function (req, res) {
// // // // //   res.render('index', {
// // // // //     req: req,
// // // // //     // res: res
// // // // //   });
// // // // // });

// app.listen(port, function() {
//   console.log(`Listening at ${port}`);
// });

var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello from Azure running node version: ' + process.version + '</br>');
}).listen(process.env.PORT || 3000);