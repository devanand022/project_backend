const dataBaseConnection = require('../database');
const jwt = require('jsonwebtoken')


const secretkey = '12345';
exports.regloginuser = (req, res) => {
    const { email, password } = req.body;
    const sqlquery = "SELECT * FROM reg_user WHERE user_name = ? AND status = '1'";
    dataBaseConnection.query(sqlquery, [email], (error, data) => {
        try{
            if(data.length == 0){
                res.json({
                    status: 400,
                    message: "user not found",
                    length: data.length
                })
            }else{
                if(data[0].password == password){
                    if(data){
                        const auth = jwt.sign({data:data}, secretkey);
                        res.json({
                            status: 200,
                            message: 'login success',
                            token: auth
                        })
                    }
                }else{
                    res.json({
                        status: 401,
                        message: "password not match"
                    })
                }
            }
        } catch(error) {
            res.json({
                status: 401,
                message: "error"
            })
        }
    })
}

exports.staffloginuser = (req, res) => {
    const { email, password } = req.body;
    const sqlquery = "SELECT * FROM staff_user WHERE username = ? AND status = '1'";
    dataBaseConnection.query(sqlquery, [email], (error, data) => {
        try{
            if(data.length == 0){
                res.json({
                    status: 400,
                    message: "user not found",
                    length: data.length
                })
            }else{
                if(data[0].password == password){
                    if(data){
                        const auth = jwt.sign({data:data}, secretkey);
                        res.json({
                            status: 200,
                            message: 'login success',
                            token: auth
                        })
                    }
                }else{
                    res.json({
                        status: 401,
                        message: "password not match"
                    })
                }
            }
        } catch(error) {
            res.json({
                status: 401,
                message: "error"
            })
        }
    })
}

exports.adminloginuser = (req, res) => {
    const { email, password } = req.body;
    const sqlquery = "SELECT * FROM admin_user WHERE username = ? AND status = '1'";
    dataBaseConnection.query(sqlquery, [email], (error, data) => {
        try{
            if(data.length == 0){
                res.json({
                    status: 400,
                    message: "user not found",
                    length: data.length
                })
            }else{
                if(data[0].password == password){
                    if(data){
                        const auth = jwt.sign({data:data}, secretkey);
                        res.json({
                            status: 200,
                            message: 'login success',
                            token: auth
                        })
                    }
                }else{
                    res.json({
                        status: 401,
                        message: "password not match"
                    })
                }
            }
        } catch(error) {
            res.json({
                status: 401,
                message: "error"
            })
        }
    })
}

exports.reguser = (req, res) => {
    const { college_name, email, depart, password } = req.body;
    const insertreguser = "INSERT INTO college ( college_name, email, depart, password) values (?, ?, ?, ?)";
    dataBaseConnection.query(insertreguser, [college_name, email, depart, password], (error, result) => {
        if (error) {
            res.status(404).json({
                success: false,
                error
            });
        }
        res.status(201).json({
            success: true,
            result
        })
    })
}