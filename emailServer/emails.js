/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fs = require('fs');

 */

import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))

//GET receive info
//PUT change info
//POST add info
//DELETE

app.get("/products/:id", (req, res)=>{
  res.json(Products.find((product)=>{
    return +req.params.id === product.id;
  }))
  res.send(req.params.id);
});

app.post("/add", (req, res)=>{
  console.log(req.body.id)
  res.sendStatus(200);
})

app.listen(port, ()=> console.log("listening on port " + port));


// one client side file will say "when the notify button is clicked, send (post) the input value (the email) to the server"
//separate server file will receive (get) the email and append it to a file