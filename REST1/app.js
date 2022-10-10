const fs = require("fs");
const app = fs();
const port = 3000;

const fs = require("fs");

try {
  const data = fs.readFileSync("/Users/joe/test.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
