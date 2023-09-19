const express = require('express');
const { sequelize, connect } = require('./config/db')

const app = express();
const PORT = 8080;

app.listen(PORT, async() => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connect()
})
