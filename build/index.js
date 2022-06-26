"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _data = _interopRequireDefault(require("./routes/data.route"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.listen(PORT);
var corsOptions = {
  origin: "http://localhost:3000"
}; //app.use(cors(corsOptions));

console.log("Server on PORT:", PORT);
app.use("/api/data", _data["default"]);