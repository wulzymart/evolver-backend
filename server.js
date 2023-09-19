import express from 'express'
import db from './config/db.js';
import router from './routes/userRoutes.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
const PORT = 8080;

db.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
}).catch((error) => {
  console.log('Unable to connect to database: ', error);
});
