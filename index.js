const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, (req, res) => {
  if (process.env.PORT) {
    console.log("servidor escuchando en el puerto" + process.env.PORT);
  } else {
    console.log("servidor escuchando en el puerto " + 3000);
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hola</h1>");
});
