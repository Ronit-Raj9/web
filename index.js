/*
const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////
// FILES

// Blocking, synchronous way
//const textIn = fs.readFileSync('./txt/append.txt', 'utf-8');
//console.log(textIn);
//const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File written!');

// Non Blocking , asynchronous way


//fs.readFile('./txt/start.txt', 'utf-8' , (err, data1) => {
//     if(err) return console.log('Error');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8' ,(err, data2) => {
//          console.log(data2);
//          fs.readFile(`./txt/append.txt`, 'utf-8' ,(err, data3) => {
//               console.log(data3);
//
//               fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}` , 'utf-8' , err => {
//                   console.log('Your file has been written!');
//               });
//          });
//     });
//});
//console.log('Will Read file!');








/////////////////////////////////
// SERVER

const textIn = fs.readFileSync('./txt/append.txt', 'utf-8');

const product = fs.readFileSync('./templates/product.html', 'utf-8');
const overview = fs.readFileSync('./templates/overview.html', 'utf-8');

const server = http.createServer((req, res) => {
     const pathName = req.url;

     if (pathName === '/overview' || pathName === '/' || pathName === '/overview.html') {
          res.end(overview);
     } else if (pathName === '/product' || pathName === '/product.html') {
          res.end(product);
     } else {
          res.writeHead(404, {
               'Content-type': 'text/html',
               'my-own-header': 'Hello-world'
          });
          res.end('<h1> Page not found! </h1>');
     }
});

server.listen(8000, '127.0.0.1', () => {
     console.log('Listening to request on port 8000');
});
*/