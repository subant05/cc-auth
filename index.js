import express from "express"
import dotenv from "dotenv";
import cluster from "cluster";
import {cpus} from "node:os"
import path from "path";
import ApiRouter from "./api/index.js"

dotenv.config({ path: "./.env" });
const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: "250mb", extended: true }));
app.use(express.static("./public"));
app.use("/api", ApiRouter);    
app.get("*", function (req, res) {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});
app
  .listen(process.env.PORT || 8081, async () => {
    console.log("Server started: localhost:8081");
  })

