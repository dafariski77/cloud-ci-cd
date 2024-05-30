const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.listen(process.env.PORT || 8000, () =>
  console.log(`Example app listening on port!`)
);
