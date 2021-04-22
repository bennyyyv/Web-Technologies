var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var fullName = "";

// Create a server
http.createServer(function (request, response) {
   var pathname = url.parse(request.url).pathname;
   const queryObject = url.parse(request.url, true).query;
   console.log("Request for " + pathname + " received.");
   if(pathname == "/data.html")
   {
      readQueryString(queryObject);
   }
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {
            'Content-Type': 'text/html'
         });
      } else {
         response.writeHead(200, {
            'Content-Type': 'text/html'
         });
         response.write(data.toString());
      }
      response.end();
   });
}).listen(8081);
console.log("Listening on Port 8081");
function readQueryString(queryObject) {
   if (queryObject != null) {
      let fName = queryObject.firstName;
      let lName = queryObject.lastName;
      if (fName != undefined && lName != undefined) {
         fullName = fName + " " + lName;

         updateFile(fullName);
      }

   }
}

function updateFile(fullName)
{

   fs.readFile('data.html', 'utf8', (err,html)=>{
      if(err){
         throw err;
      }

      let root = parse(html);

      let mySpan = root.querySelector('span');

      mySpan.set_content(fullName);

      var writerStream = fs.createWriteStream("data.html");

      writerStream.write(root.toString(), 'UTF8');

      writerStream.end();

      writerStream.on('finish', function () {
         console.log("Write completed.");
      });

      writerStream.on('error', function (err) {
         console.log(err.stack);
      });
    });

}