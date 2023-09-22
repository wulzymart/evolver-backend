import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import TwitterStrategy from "passport-twitter";
import User from "../models/User.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(new Error("Internal server error"));
  }
});
passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLECLIENTID,
      clientSecret: process.env.GOOGLECLIENTSECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user, created] = await User.findOrCreate({
          where: { id: profile.id },
          defaults: {
            name: profile.name.givenName + " " + profile.name.familyName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
          },
        });
        done(null, user);
      } catch (error) {
        console.log(error);
        return done(new Error("Internal Server Error"));
      }
    },
  ),
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://my-localhost.com:8000/auth/twitter/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [user, created] = await User.findOrCreate({
          where: { id: profile.id.toString() },
          defaults: {
            name: profile.name,
            avatar: profile.profile_image_url,
            email: profile.email || null,
          },
        });
        done(null, user);
      } catch (error) {
        console.log(error);
        return done(new Error("Internal Server Error"));
      }
    },
  ),
);
