const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// authorisation CORS (avec le package cors)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
  })
);

// middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/post", require("./routes/post.routes"));

// lancer le serveur
app.listen(process.env.PORT || port, () => console.log("le serveur a démarré au port " + port));