const dataBaseConnection = require('../database');

exports.staffEvents = (req, res) => {
    const events = req.params.event;
    const staffEvent = "SELECT * FROM participates WHERE event1 = ? OR event2 = ? AND status='verified'";
    dataBaseConnection.query(staffEvent, [events, events], (error, result) => {
        if(error){
            res.json({
                status: 400,
                error : error
            })
        }else{
            res.json({
                status: 200,
                staffevent : result
            })
        }
    })
}

exports.selectEvent1 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updateevent1 = "UPDATE participates SET event1result='selected' WHERE id = ? AND event1 = ?";
    dataBaseConnection.query(updateevent1, [id, event], (error, result) => {
        if(error){
            res.json({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.selectEvent2 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updateevent2 = "UPDATE participates SET event2result='selected' WHERE id = ? and event2 = ?";
    dataBaseConnection.query(updateevent2, [id, event], (error, result) => {
        if(error){
            res.json({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.unselectEvent1 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updateevent1 = "UPDATE participates SET event1result=null WHERE id = ? and event1 = ?";
    dataBaseConnection.query(updateevent1, [id, event], (error, result) => {
        if(error){
            res.json({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.unselectEvent2 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updateevent2 = "UPDATE participates SET event2result=null WHERE id = ? and event2 = ?";
    dataBaseConnection.query(updateevent2, [id, event], (error, result) => {
        if(error){
            res.json({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.filterselect = (req, res) => {
    const event = req.params.event;
    const filterevent = "SELECT * FROM participates WHERE event1 = ? AND event1result='selected' OR event2 = ? AND event2result='selected'";
    dataBaseConnection.query(filterevent, [event, event], (error, result) => {
        if(error){
            res.json({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                filterevent: result
            })
        }
    })
}

exports.update1first = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='first' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update1second = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='second' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update1third = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='third' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update1 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final=null WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update2first = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='first' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update2second = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='second' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update2third = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final='third' WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.update2 = (req, res) => {
    const id = req.params.id;
    const { event } = req.body;
    const updatefirst = `UPDATE participates SET event1final=null WHERE id = ${id} AND event1='${event}' AND event1result='selected'`;
    dataBaseConnection.query(updatefirst, (error, result) =>{
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                message: "successfully updated"
            })
        }
    })
}

exports.finalresult =(req, res) => {
    const event = req.params.event;
    const finalresult = "SELECT * FROM participates WHERE (event1 = ? AND event1final = 'first' OR event1final = 'second' OR event1final = 'third' AND event1result = 'selected') OR (event2 = ? AND event2final = 'first' OR event2final = 'second' OR event2final = 'third' AND event2result = 'selected')";
    dataBaseConnection.query(finalresult, [event, event], (error, result) => {
        if(error){
            res.josn({
                status: 400,
                message: error
            })
        }else{
            res.json({
                status: 200,
                finalresult: result
            })
        }
    })
}