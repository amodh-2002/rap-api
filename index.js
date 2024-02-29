const express = require("express");
//the below code all it does is --> it holds all the function that the express has
const app = express();
//the below code is to handle cors --> learn more about it
const cors = require("cors");
const PORT = 8000;

let rappers = {
  ksi: {
    age: 30,
    birthName: "Olajide Olayinka Williams Olatunji",
    birthLocation: "London England",
  },
  aitch: {
    age: 24,
    birthName: "Harrison James Armstrong",
    birthLocation: "Manchester England",
  },
  suga: {
    age: 30,
    birthName: "Yui Hiruma",
    birthLocation: "Daegu, SouthKorea",
  },
  unknown: {
    age: "unknown",
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

//this is a middleware btw --> learn more about it
app.use(cors());

//get takes two values, request and function --> callback function
app.get("/", (req, res) => {
  // now we have to give the dir file to look for that exact file
  //__dirname--> look where ever the index.js is in that folder find the index.html file
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers", (req, res) => {
  res.json(rappers);
});

app.get("/api/rappers/:rapperName", (req, res) => {
  // understand the both above url and const rapperName part : Explained at2:58:10 from class 32
  // the req.params.rapperName that rapperName should be same as mentioned in url so that whatever client puts there u can store in const rapperName
  const rapName = req.params.rapperName.toLowerCase();
  console.log(rapName);
  // why cant we use rappers.rapName--> learn about it
  if (rappers[rapName]) {
    res.json(rappers[rapName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

//it takes two thing port and callback
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
