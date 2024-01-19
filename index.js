import express from "express"
import path from "path";
import ApiRouter from "./api/index.js"

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: "250mb", extended: true }));
app.use(express.static("./app/build"));
app.use("/api", ApiRouter);    
app.get("*", function (req, res) {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});
app
  .listen(process.env.PORT || 8081, async () => {
    console.log("Server started: localhost:8081");
  })

