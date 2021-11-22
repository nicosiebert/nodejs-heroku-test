const express = require("express");
const app = express();

//setting
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(express.static("./public"));
app.use(require("./src/router/router"));

//server
app.listen(app.get("port"), (req, res) => {
  console.log("servidor escuchando en el puerto " + app.get("port"));
});
