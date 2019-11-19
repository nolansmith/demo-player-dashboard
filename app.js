var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, "dist")));
require('dotenv').config({
    path: path.resolve(__dirname) + '/.env'
})

var port = process.env.PORT || 9001;

app.get('/', function(req,res) {
    res.sendFile('index.html');
});

app.listen(port, () => console.log(`
[*] API URL: ${process.env.API_URL}
[*] Web server started on ${port}...`))