var http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.write('Hey my app was deployed :)');
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
