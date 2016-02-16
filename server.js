/*

http.createServer(function(req, res){
  console.log(req.url);
  if(req.url === '/index'){
    fs.readFile('index.html', function(err, html){

      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end()

    })
  } else {

    res.writeHead(200);
    res.write('<p>Main page.</p>');
    res.end('It works! Path is: ' + req.url)

  }*/

//}).listen(8080);*/
//
// modules
var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );