const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World 22",
  });
});

app.listen(8000, () => console.log(`Example app listening on port 8000!`));
