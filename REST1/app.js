const fs = require("fs");

try {
  const data = fs.readFileSync(
    "/Users/veera/Documents/Webi/REST1/sanakirja.txt",
    "utf8"
  );
  console.log(data);
} catch (err) {
  console.error(err);
}
