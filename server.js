import express from 'express'
import db from './config/db.js';

const app = express();
const PORT = 8080;

db.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
}).catch((error) => {
  console.log('Unable to connect to database: ', error);
});
