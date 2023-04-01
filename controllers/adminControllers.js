const dataBaseConnection = require('../database');

exports.createEvent = (req, res) => {
    const { event_name } = req.body;
    const eventInsert = "INSERT INTO userevent (name) VALUES (?)";
    dataBaseConnection.query(eventInsert, [event_name], (error, result) => {
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

exports.viewAllEvent = (req, res) => {
    const viewAllEvents = 'SELECT * FROM userevent';
    dataBaseConnection.query(viewAllEvents, (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            allevent: result
        });
    })
}

exports.inactiveEvent = (req, res) => {
    const id = req.params.id;
    const inactiveEvent = "UPDATE userevent SET status = '0' WHERE id = ?";
    dataBaseConnection.query(inactiveEvent, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}

exports.activeEvent = (req, res) => {
    const id = req.params.id;
    const activeEvent = "UPDATE userevent SET status = '1' WHERE id = ?";
    dataBaseConnection.query(activeEvent, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}

exports.addReguser = (req, res) => {
    const { user, pass } = req.body;
    const addReguser = "INSERT INTO reg_user (user_name, password) VALUES (?, ?)";
    dataBaseConnection.query(addReguser, [user, pass], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        } else {
            res.status(201).json({
                success: true,
                message: "successfully added"
            })
        }
    })
}

exports.getReguser = (req, res) => {
    const getReguser = "SELECT * FROM reg_user";
    dataBaseConnection.query(getReguser, (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        } else {
            res.status(201).json({
                success: true,
                reguser : result
            })
        }
    })
}

exports.inactiveReguser = (req, res) => {
    const id = req.params.id;
    const inactivereg = "UPDATE reg_user SET status = '0' WHERE id = ?";
    dataBaseConnection.query(inactivereg, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}

exports.activeReguser = (req, res) => {
    const id = req.params.id;
    const activereg = "UPDATE reg_user SET status = '1' WHERE id = ?";
    dataBaseConnection.query(activereg, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}

exports.addStaffuser = (req, res) => {
    const { user, pass, event_name } = req.body;
    const addStaffuser = "INSERT INTO staff_user (username, password, event) VALUES (?, ?, ?)";
    dataBaseConnection.query(addStaffuser, [user, pass, event_name], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        } else {
            res.status(201).json({
                success: true,
                message: "successfully added"
            })
        }
    })
}

exports.getStaffuser = (req, res) => {
    const getStaffuser = "SELECT * FROM staff_user";
    dataBaseConnection.query(getStaffuser, (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        } else {
            res.status(201).json({
                success: true,
                staffuser : result
            })
        }
    })
}

exports.inactiveStaff = (req, res) => {
    const id = req.params.id;
    const inactivestaff = "UPDATE staff_user SET status = '0' WHERE id = ?";
    dataBaseConnection.query(inactivestaff, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}

exports.activeStaff = (req, res) => {
    const id = req.params.id;
    const activestaff = "UPDATE staff_user SET status = '1' WHERE id = ?";
    dataBaseConnection.query(activestaff, [id], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                message: error
            });
        }
        res.status(201).json({
            success: true,
            message: "successfully updated"
        })
    })
}