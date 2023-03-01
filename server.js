const app = require('./app');
const connectDatabase = require('./database');

connectDatabase();

const port = 7000;

app.listen(port, () => {
    console.log(`server is running ${port}`);
})