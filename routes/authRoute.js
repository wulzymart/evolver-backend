import express from "express";
import passport from "passport";
const router = express.Router();

// auth login
router.get("/login");
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "user (created and) logged in successfully",
    user: req.user,
  });
});
router.get("/twitter", passport.authenticate("twitter"));
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter"),
  (req, res) => {
    res
      .status(200)
      .json({
        status: "success",
        msg: "user (created and) logged in successfully",
        user: req.user,
      });
  },
);
router.get("/logout");
export default router;
