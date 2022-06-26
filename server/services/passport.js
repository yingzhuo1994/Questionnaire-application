const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  console.log("serialize: ", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("id: ", id);
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        console.log("The user has existed.");
        return done(null, existingUser);
      }
      
      console.log("Create a new user!");
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
