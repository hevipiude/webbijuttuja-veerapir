const express = require("express"); // importing Express
const app = express(); // instance of express
const port = process.env.PORT || 3000; // Defining port by environmental parameter or 3000
// Create a routing
app.get("/", function (req, res) {
  res.send("Server is running.");
});

// App is listening to user-defined port or 300 and printing the information to the console.
app.listen(port, function (req, res) {
  console.log(`Server is listening on port ${port}!`);
});

const fs = require("fs");

try {
  const data = fs.readFileSync(
    "/Users/veera/Documents/Webi/REST1/sanat.txt",
    "utf8"
  );
  console.log(data);
} catch (err) {
  console.error(err);
}
