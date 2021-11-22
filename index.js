const express = require("express");
const app = express();
const morgan = require("morgan");

//setting
app.set("port", process.env.HOST || 80);

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("view engine", "ejs");

//public
app.use(express.static("./public"));
//router
app.use(require("./src/router/router"));
//server
app.listen(app.get("port"), (req, res) => {
  console.log("servidor escuchando en el puerto" + app.get("port"));
});
