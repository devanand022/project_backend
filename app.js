const express =  require('express');
const connectDatabase = require('./database');
const app = express();

app.use(express.json());

const port = 7000;

connectDatabase();

app.listen(port, () => {
    console.log(`server is running ${port}`);
})