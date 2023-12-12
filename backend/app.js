require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//solve Cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//upload
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//db connection
require("./config/db.js");

//routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});


