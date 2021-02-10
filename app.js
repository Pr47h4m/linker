const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./utils/root-dir");
const routes = require("./routes/routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen(1809);
