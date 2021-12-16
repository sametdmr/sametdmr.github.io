const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (res,req) => {
    res.end("at adam");
});

const server = app.listen(PORT, () => {
    console.log("server $(PORT) portunda çalışıyor");
});