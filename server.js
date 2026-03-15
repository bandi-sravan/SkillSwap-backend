const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db.js');
const PORT = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
{
     res.send("Skill Swap Platform");
});
app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
})
