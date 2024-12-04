import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Node.js Server</title>
      </head>
      <body>
          <h1>Hello, World!</h1>
          <script
          src="script.js"
          integrity="sha384-kd4XzmEbknD6MT8HDrpowdeGuuY0beHlxCZexo6X6YwDMeEDCfLOjOPdohvxIkFf"
          type="text/javascript">
          </script>
          <script
          src="https://cdn.use1.dev.pub.dydy.io/scripts/2.45.0-dev58-g9561623e/harmony.js"
          integrity="sha384-cPoOQJB9RxSe4YHiidGgv3L4OEbHlkeRY6HlEkoD99n6EdqZWQSRkT9MOHMp5vqP sha384-cEwEKYZXI6k+JzF6rlEKYGDF0BZp3JS47BCL3+KfpjCtVeMQTOQn791eTv79Grns sha384-okKWUjuf3fbVbPCMQavO3Ddssp0KhzVXhErk0Lu8YoBM+ziqi8EPAuRSWA/vl1Ft sha384-o7k8X3DGgxgE/Oi+ArV+xx2S+xmmZyXGbL4i/2ldijtpX4BSmO3a7r1Mpu7j3HPG sha384-sDyDQChPea8UFgK5tl5ZETgp3sybrnyQux5Sf3qUp00M7Kpwwuazci2KV4ienNvq sha384-DlsamNSLAprXYcORtp6jYziy++YjYepFwexzhqKgwMY8icc0kc/QRqQQMDQDKss1 sha384-0oekOI7tvT76k3lAo+VyxcuwsbY0tsITewJRQ8Pf/dg2VuyKi1YIrrvbik/6myog sha384-rvgqtsOWLmZAG4ITHdUrikyg5PC+YvPtDuDm5ZdfwdWf7HdKpDcX7IANx7+0HimR sha384-vpzV31ElKRIBtDRh32hh+Q4J9qbN/VBHcc98XodpSvSCIDfEC0GC5gBCaIRk79jD sha384-YUJqY/T0qnUzZWstGZd30Odp2HLWbaQrjzmdmelHJqYsCah0emQQJvMIjyEC0Lay"
          crossorigin="anonymous"
          type="text/javascript">
          </script>
          <script
          src="https://cdn.use1.dev.pub.dydy.io/dev-use1-release/api/8790150/api_static.js"
          crossorigin="anonymous"
          type="text/javascript">
          </script>

          <script
          src="https://cdn.use1.dev.pub.dydy.io/dev-use1-release/api/8790150/api_dynamic.js"
          crossorigin="anonymous"
          type="text/javascript">
          </script>

          <script
          src="https://cdn.dynamicyield.com/api/8790150/api_static.js"
          crossorigin="anonymous"
          type="text/javascript">
          </script>

          <script
          src="script.js"
          type="text/javascript">
          </script>

          
      </body>
      </html>
    `;

    res.end(htmlResponse);
  } else if (req.url === '/script.js' || req.url === '/cookies.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    const scriptName = req.url.substr(1, req.url.length)
    const filePath = path.join(__dirname, scriptName); // Adjust the path as necessary
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// 1- npm run generateFile "version 1"
// 2-  npm run generateHash -> kd4XzmEbknD6MT8HDrpowdeGuuY0beHlxCZexo6X6YwDMeEDCfLOjOPdohvxIkFf
// integrity="sha384-kd4XzmEbknD6MT8HDrpowdeGuuY0beHlxCZexo6X6YwDMeEDCfLOjOPdohvxIkFf sha384-qJ7fQ91mDjviNx0hYeW5TZYQnHfJpNrzjowryBymcRdwn+FLKCUjU6Fv/+B9ElSa"



// Cookies:
// import http from 'http';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
    
//     // Set the HttpOnly cookie
//     // res.setHeader('Set-Cookie', 'myCookie=value123; HttpOnly; Max-Age=3600; Path=/; Secure');
//     res.setHeader('Set-Cookie', 'myCookie=value123; Max-Age=3600; Path=/; Secure');

//     const htmlResponse = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>My Node.js Server</title>
//       </head>
//       <body>
//           <h1>Hello, World!</h1>
//           <script
//           src="script.js"
//           type="text/javascript">
//           </script>
//           <script
//           src="cookies.js"
//           type="text/javascript">
//           </script>
//       </body>
//       </html>
//     `;

//     res.end(htmlResponse);
//   } else if (req.url === '/script.js' || req.url === '/cookies.js') {
//     console.log(req.url)
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/javascript');
//     const scriptName = req.url.substr(1, req.url.length)
//     const filePath = path.join(__dirname, scriptName); // Adjust the path as necessary
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.statusCode = 404;
//         res.end('404 Not Found');
//       } else {
//         res.end(data);
//       }
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('404 Not Found');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// 1- npm run generateFile "version 1"
// 2-  npm run generateHash -> kd4XzmEbknD6MT8HDrpowdeGuuY0beHlxCZexo6X6YwDMeEDCfLOjOPdohvxIkFf
// integrity="sha384-kd4XzmEbknD6MT8HDrpowdeGuuY0beHlxCZexo6X6YwDMeEDCfLOjOPdohvxIkFf sha384-qJ7fQ91mDjviNx0hYeW5TZYQnHfJpNrzjowryBymcRdwn+FLKCUjU6Fv/+B9ElSa"