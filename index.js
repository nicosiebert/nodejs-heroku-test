const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

//public
app.use(express.static("./public"));
//router
app.use(require("./src/router/router"));
//server
app.listen(process.env.PORT || 3000, (req, res) => {
  if (process.env.PORT) {
    console.log("servidor escuchando en el puerto" + process.env.PORT);
  } else {
    console.log("servidor escuchando en el puerto " + 3000);
  }
});
