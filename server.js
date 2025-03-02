import express from "express";

const app  = express();
app.use(express.static("public"));

app.listen(1337, ()=>{
    console.log("listening on port: 1337");
});