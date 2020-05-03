/* eslint-disable import/first */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');


// const User = require('./models/users');


const PORT = process.env.SERVER_PORT;
const app = express();
const router = express.Router();


app.use(cors());

app.use(express.static(path.join(__dirname, '../client')));


router.get('*', (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
  }
  return res.json({ message: 'React Starter API' });
})

app.use(router);



app.listen(PORT, () => {
  console.log(`🚀 TS Server ready at http://localhost:${PORT} (-_-)!`);
});
