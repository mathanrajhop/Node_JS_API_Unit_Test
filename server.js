require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

function init() {

  app.use(express.json());

  app.use('/api/item', apiRouter);

  app.use('/', (req, res) => {
    res.send('Node JS API Unit Test')
  });

  return app.listen(PORT,() =>{
    console.log('Server started on port 3000...');
  });
}

module.exports = init()
