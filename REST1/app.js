const tiedosto = "/Users/veera/Documents/Webi/REST1/test.txt";
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  try {
    const data = fs.readFileSync(tiedosto, "utf8");
    const arr = data.split("\n").map((str) => str.split(" "));

    const sanat = Object.fromEntries(arr);
    const sana = req.query.sana;

    if (sana in sanat) {
      res.status(200).send(sanat[sana]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post("/", function (req, res) {
  const fi = req.query.fi;
  const en = req.query.en;

  if (fi && en) {
    try {
      fs.appendFileSync(tiedosto, `\n${fi} ${en}`);
    } catch (err) {
      res.sendStatus(500);
    }
    res.status(201).send(`${fi} ${en}`);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});
