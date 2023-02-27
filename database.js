const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

const connectDatabase = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`mongodb is connected to host ${con.connection.host}`);
    })
}

module.exports = connectDatabase;