const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum/:a/:b" , (req , res)=>{
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);
  let sum =parseInt (a + b);
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
