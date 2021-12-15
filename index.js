const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', (req, res) => {

    res.end("atadam");

});

app.get('/list', (req, res) => {
    //res.send('list of the shelf columns');
   
    fs.readFile('shelf.json', 'utf8', (err, data) => {
            console.log(data);
            res.end(data);
    });
    
});

app.get('/listbyid', (req, res) => {
    //res.send('list of the shelf columns');
    fs.readFile('shelf.json', 'utf8', (err, data) => {
        var id = req.query.id;
        data = JSON.parse(data);
        console.log(JSON.stringify(data[id], null, 4));
        res.end(JSON.stringify(data[id], null, 4));
    });
});

app.get('/update', (req, res) => {
    //res.end('process that update the columns');
    fs.readFile('shelf.json', 'utf8', (err, data) => {
             data = JSON.parse(data);
             var id = req.query.id;
             var ss1 = req.query.shelf_status_1;
             var ss2 = req.query.shelf_status_2;
             var ss3 = req.query.shelf_status_3;
             var ss4 = req.query.shelf_status_4;
             var ss5 = req.query.shelf_status_5;
             var ss6 = req.query.shelf_status_6;

             try{
                 console.log("try çalıştı")
                 //data[req.query.shelf_name][req.query.shelf_column] = !Boolean(req.query.shelf_status);
                 let bl1 = (ss1 === 'true');
                 let bl2 = (ss2 === 'true');
                 let bl3 = (ss3 === 'true');
                 let bl4 = (ss4 === 'true');
                 let bl5 = (ss5 === 'true');
                 let bl6 = (ss6 === 'true');
                 data[id]["shelf_status_1"] = bl1;
                 data[id]["shelf_status_2"] = bl2;
                 data[id]["shelf_status_3"] = bl3;
                 data[id]["shelf_status_4"] = bl4;
                 data[id]["shelf_status_5"] = bl5;
                 data[id]["shelf_status_6"] = bl6;

             }
             catch (err){
                 console.log("benim   -------------   "+err);
             }
             fs.writeFile('shelf.json', JSON.stringify(data, null, 4), (err, file) => {if (err) throw err;});
             res.end(JSON.stringify(data[id], null, 4));
    });
});



const server = app.listen(80, () => {console.log('Sunucu Çalışıyor...');});
