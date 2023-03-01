const express =  require('express')
const app = express();
const participates = require('./routes/participates');

app.use(express.json());
app.use('/api/', participates);

module.exports = app;