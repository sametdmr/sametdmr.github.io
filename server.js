var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', (res,req) => {
    res.end("atadam");
})

app.listen(PORT, () => {
    console.log("server $(PORT) portunda çalışıyor");
})