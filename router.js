const express = require('express');

const DBConn = require('./DBConn');
const routes = express.Router();

routes.post('/', (req, res) => {
  let sqlQuery = `INSERT INTO items SET title='${req.body.title}', body='${req.body.body}'`;
  DBConn.query(sqlQuery,(err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        message: err
      });
    }
    return res.status(200).json({ success: true, message: results });
  });
});

routes.put('/:id', (req, res) => {
  let sqlQuery = `UPDATE items SET title='${req.body.title}', body='${req.body.body}' WHERE id=${req.params.id}`;
  DBConn.query(sqlQuery, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        message: err
      });
    }
    return res.status(200).json({ success: true, message: results });
  });
});


routes.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM items";
    DBConn.query(sqlQuery, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(400).json({
          success: false,
          message: err
        });
      }
      return res.status(200).json({ success: true, message: results });
  });
});

routes.get('/:id', (req, res) => {
  let sqlQuery = `SELECT * FROM items WHERE id=${req.params.id}`;
  DBConn.query(sqlQuery, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        message: err
      });
    }
    return res.status(200).json({ success: true, message: results });
  });
});

routes.delete('/:id', (req, res) => {
  let sqlQuery = `DELETE FROM items WHERE id=${req.params.id}`;
  DBConn.query(sqlQuery, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        message: err
      });
    }
    return res.status(200).json({ success: true, message: results });
  });
});

module.exports = routes
