require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`You are now connected!`);
});
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}, http://localhost:${PORT}`);
});
