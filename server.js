const express = require('express');
const cors = require('cors');
const app = express();
const port  =  3000;

const bodyParser  = require('body-parser');

var mongoose=require("mongoose");
const routes=require("./routes");
var url = "mongodb://localhost:27017/budget";
var budgetModel = require('./models/budgetSchema');

const router = express.Router()

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>{
            app.use(express.json())
            app.use("/api",routes)
        })
        .catch((connectionError)=>{
          console.log(connectionError)
        })


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

// const fs = require('fs');
// var obj = '';
// fs.readFile('./budget.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
// });

// // const budget;


// app.get('/budget',(req,res) => {
//     res.json(obj);
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})