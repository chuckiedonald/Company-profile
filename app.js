const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { get } = require("http");
//var _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
})





app.listen(3000,()=>{
    console.log("server running on port 3000");
})