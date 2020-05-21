const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';
const port = 2468;

const fibonacciCached = function() {
  let a = [0,1]

  return function(n) {
    if (a[n] != undefined) {
      console.log(n + '\thit')
      return a[n]
    } else {
      for (let i = a.length; i < n+1; i++) {
        a.push(a[i-2] + a[i-1])
      }
      console.log(n + '\tmiss')
      return a[n]
    }
  }
}();

const server = http.createServer((req, res) => {
  const query = url.parse(req.url,true).query;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(fibonacciCached(Number(query.n)) + '\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
