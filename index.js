const express = require("express");
const mongoose = require("mongoose");
require('./db/config');
const Doctor = require('./db/doctors');
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.get('/', async (req, resp) => {
  try {
    const doctors = await Doctor.find();
    
    if (doctors.length > 0) {
      resp.json(doctors);
    } else {
      resp.status(404).json({ message: "No doctors found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    resp.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
