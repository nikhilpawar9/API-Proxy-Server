const express = require("express");
const cors = require("cors");
require('dotenv').config()
const rateLimit = require('express-rate-limit')

const PORT = process.env.PORT || 5000;

const app = express();

//Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 100, //10 minutes
  max: 100
})
app.use(limiter)
app.set('trust proxy', 1)


app.use('/api', require('./routes'))

//enable cors
app.use(cors());

// Set static folder
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


