/* eslint-disable no-undef */

const express = require("express");

const path = require("path");

const cors = require("cors");

const app = express();

const {
  getUser,
  addUser,
  updateInvitation,
  getData,
} = require("./controler/userControler.js");

app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    const whitelist = ["http://localhost:5173", "http://77.37.51.45:5003"];
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/upload", express.static(path.join(__dirname, "/upload")));

app.listen("3000");

app.get("/teste/:reponseServer", (req, res) => {
  const { reponseServer } = req.params;
  res.json({ reponse: reponseServer });
});

app.get("/get-user/:name", getUser);

app.post("/add-user", addUser);

app.put("/update-invitation", updateInvitation);

app.get("/get-data/:id", getData);
