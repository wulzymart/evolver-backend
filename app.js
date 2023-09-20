import express from 'express';
import cors from 'cors';

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse requests of content-type - application/toJSON();
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
