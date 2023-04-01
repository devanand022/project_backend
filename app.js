const express =  require('express')
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const reg = require('./routers/reg');
const admin = require('./routers/admin');
const auth = require('./routers/auth');

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

app.listen(5000, () => {
    console.log("Server is running on 5000");
})


app.use('/api/', reg);
app.use('/api/', admin);
app.use('/api/', auth);