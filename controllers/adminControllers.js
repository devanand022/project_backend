const dataBaseConnection = require('../database');

exports.createEvent = (req, res) => {
    const { name } = req.body;
    const eventInsert = "INSERT INTO userevent (name) VALUES (?)";
    dataBaseConnection.query(eventInsert, [name], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    })
}

exports.viewEvent = (req, res) => {
    const viewEvents = "SELECT * FROM userevent where status=1";
    dataBaseConnection.query(viewEvents, (error, result) => {
        res.status(201).json({
            success: true,
            event: result
        })
    })
}