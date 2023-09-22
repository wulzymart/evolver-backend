import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import cookieSession from "cookie-session";
import passport from "passport";
import db from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import "./config/passport_config.js";
import { userAuthorisation } from "./middleware/authorization.js";
// Create Express app
const app = express();

// Enable CORS
app.use(cors());
app.use(
  cookieSession({
    name: "Event_app",
    keys: [process.env.COOKIESECRET],
    maxAge: 24 * 60 * 60 * 1000,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
// Parse requests of content-type - application/toJSON();
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//define authentication route
app.use("/auth", authRouter);

// define api root route
app.use("/api", userAuthorisation, router);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
