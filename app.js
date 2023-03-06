const express =  require('express')
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const dataBaseConnection = require('./database');

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log("Server is running on 5000");
})


