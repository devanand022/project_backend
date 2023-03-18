const dataBaseConnection = require('../database');

exports.createCollege = (req, res) => {
    const { college_name, email, name, password } = req.body;
    const collegeInsert = "INSERT INTO college (college_name, email, name, password) VALUES (?, ?, ?, ?)";
    dataBaseConnection.query(collegeInsert, [college_name, email, name, password], (error, result) => {
        if(error){
            console.log(error);
        }
        res.status(201).json({
            success: true,
            message: "Successfully Added"
        })
    })
}

exports.createParticipates = (req, res) => {  
    const { add } = req.body;
    const collegeInsert = "INSERT INTO participates (name, lot_no, email, phone, session, degree, event1, event2) VALUES ?";
    dataBaseConnection.query(collegeInsert, 
        [add.map(a => [a.name, a.college, a.email, a.phone, a.session, a.degree, a.event1, a.event2])], 
        (error, result) => {
        if(error){
            console.log(error);
        }
        res.status(201).json({
            success: true,
            message: "Successfully Added"
        })
    });
}

exports.viewColleges = (req, res) => {
    const viewCollege = "SELECT * FROM college ORDER BY lot_no";
    dataBaseConnection.query(viewCollege, (error, result) => {
        res.status(201).json({
            success: true,
            college: result
        });
    })
}

exports.viewParticipates = (req, res) => {
    const viewParticipates = "SELECT * FROM participates WHERE status='verified' ORDER BY lot_no";
    dataBaseConnection.query(viewParticipates, (error, result) => {
        res.status(201).json({
            success: true,
            participate: result
        });
    })
}

exports.viewVerifiedColleges = (req, res) => {
    const viewVerifiedColleges = "SELECT * FROM college where status='verified' ORDER BY lot_no";
    dataBaseConnection.query(viewVerifiedColleges, (error, result) => {
        res.status(201).json({
            success: true,
            verifiedcollege: result
        })
    })
}

exports.viewUnVerifiedColleges = (req, res) => {
    const viewUnVerifiedColleges = "SELECT * FROM college where status='unverified' ORDER BY lot_no";
    dataBaseConnection.query(viewUnVerifiedColleges, (error, result) => {
        res.status(201).json({
            success: true,
            unverifiedcollege: result
        })
    })
}

exports.singleCollege = (req, res) => {
    const id = req.params.id;
    const singleCollege = `SELECT * FROM participates WHERE lot_no='${id}'`;
    dataBaseConnection.query(singleCollege, (error, result) => {
        res.status(201).json({
            success: true,
            singlecollege: result
        })
    })
}

exports.singleParticipate = (req, res) => {
    const id = req.params.id;
    const singleParticipate = `SELECT * FROM participates WHERE id='${id}'`;
    dataBaseConnection.query(singleParticipate, (error, result) => {
        res.status(201).json({
            success: true,
            singleparticipate: result
        })
    })
}

exports.editParticipate = (req, res) => {
    const id = req.params.id;
    const { name, email, phone, session, degree, event1, event2 } = req.body;
    const editParticipate = 'UPDATE participates SET name = ?, email = ?, phone = ?, session = ?, degree = ?, event1 = ?, event2 = ? WHERE id = ?'
    dataBaseConnection.query(editParticipate, [ name, email, phone, session, degree, event1, event2, id ], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully Updated"
        })
    })
}

exports.verifyCollege = (req, res) => {
    const id = req.params.id;
    const verifyCollege = "UPDATE college SET status ='verified' WHERE lot_no = ?";
    dataBaseConnection.query(verifyCollege, [id], (error, result) => {
        if(error){
            res.status(500).json({
                success: false,
                error: error
            })
            return
        }
        res.status(201).json({
            success: true,
            message: "Successfully updated"
        })
    })
}

exports.unVerifyCollege = (req, res) => {
    const id = req.params.id;
    const unVerifyCollege = "UPDATE college SET status ='unverified' WHERE lot_no = ?";
    dataBaseConnection.query(unVerifyCollege, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully updated"
        })
    })
}

exports.verifyParticipate = (req, res) => {
    const id = req.params.id;
    const verifyParticipate = "UPDATE participates SET status='verified' WHERE lot_no = ?";
    dataBaseConnection.query(verifyParticipate, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully updated"
        })
    })
}

exports.unVerifyParticipate = (req, res) => {
    const id = req.params.id;
    const unVerifyParticipate = "UPDATE participates SET status='unverified' WHERE lot_no = ?";
    dataBaseConnection.query(unVerifyParticipate, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully updated"
        })
    })
}

exports.delCol = (req, res) => {
    const id = req.params.id;
    const deleteCol = "DELETE FROM college WHERE lot_no = ?";
    dataBaseConnection.query(deleteCol, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully Deleted"
        })
    })
}

exports.delParticipate = (req, res) => {
    const id = req.params.id;
    const deleteParticipate = "DELETE FROM participates WHERE lot_no = ?";
    dataBaseConnection.query(deleteParticipate, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully Deleted"
        })
    })
}

exports.delSingleParticipate = (req, res) => {
    const id = req.params.id;
    const deleteSingleParticipate = "DELETE FROM participates WHERE id = ?";
    dataBaseConnection.query(deleteSingleParticipate, [id], (error, result) => {
        res.status(201).json({
            success: true,
            message: "Successfully Deleted"
        })
    })
}