import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User, { IUser } from './models/user';
import authRoutes from './routes/authRoutes';
import connectDB from './database/connection';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET || 'this-is-a-secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

connectDB();

passport.serializeUser((user: any, cb) => {
    cb(null, user._id.toString());
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    callbackURL: "http://localhost:3000/auth/google/skriza",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate(
            { googleId: profile.id },
            {},  // Empty options object
            (err: string | Error | null | undefined, user: Express.User | undefined) => {
                return cb(err, user);
            }
        );
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID || '',
    clientSecret: process.env.FACEBOOK_APP_SECRET || '',
    callbackURL: "http://localhost:3000/auth/facebook/skriza"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate(
            { facebookId: profile.id },
            {},  // Empty options object
            (err: any, user: any) => {
                return cb(err, user);
            }
        );
    }
));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
