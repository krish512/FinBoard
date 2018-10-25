import * as express from 'express';
import * as bodyParser from 'body-parser';
import environment from './environments';
// import * as passport from 'passport';
// import * as GoogleStrategy from 'passport-google-oauth20';
// import User from './models/user';
// import * as mongoose from 'mongoose';
import * as path from 'path';
// import * as connectRedis from 'connect-redis';
// import * as session from 'express-session';
import routes from './routes';

// const RedisStore = connectRedis(session);

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        // // Connect to database
        // mongoose.connect(environment.mongo.uri);

        // // On Connection
        // mongoose.connection.on('connected', () => {
        //     console.log("Connected to database");
        // });

        // // On Error
        // mongoose.connection.on('error', (err) => {
        //     console.log("Database error: " + err);
        // });

        this.app.use(bodyParser.json({ extended: true }));

        this.app.use(express.static(path.join(__dirname, '../../client/dist')));


        // this.app.use(
        //     session({
        //         store: new RedisStore(environment.redis.options),
        //         secret: environment.redis.secret,
        //         resave: true,
        //         saveUninitialized: true,
        //     })
        // );

        // this.app.use(passport.initialize());
        // this.app.use(passport.session());

        // passport.use(
        //     new GoogleStrategy(environment.googleStrategy, (accessToken, refreshToken, profile, done) => {
        //         const user_id = profile.id;
        //         const firstname = profile.name.givenName.trim();
        //         const lastname = profile.name.familyName.trim();
        //         const image_uri = profile.photos[0].value;
        //         const email = profile.emails[0].value;
        //         const email_domain = profile._json.domain;

        //         const user_obj = {
        //             _id: user_id,
        //             email: email,
        //             firstname: firstname,
        //             lastname: lastname,
        //             image_uri: image_uri
        //         };

        //         let obj;

        //         if (email_domain == "forkmedia.in") {
        //             User.User.findOneAndUpdate({ _id: user_id }, user_obj,
        //                 {
        //                     upsert: true,
        //                     new: true,
        //                     setDefaultsOnInsert: true
        //                 })
        //                 .exec()
        //                 .then((user) => {
        //                     obj = { id: user_id, aT: accessToken, rT: refreshToken, iU: image_uri, role: user.role, email: email };
        //                     return done(null, obj);
        //                 })
        //                 .catch((err) => done(err, null));
        //         } else {
        //             const err = new Error('Domain not allowed');
        //             return done(err);
        //         }
        //     })
        // );

        // passport.serializeUser((user, done) => {
        //     done(null, user);
        // });

        // passport.deserializeUser((user, done) => {
        //     done(null, user);
        // });
        // this.app.use((req, res, next) => {
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //     next();
        // });

        this.app.get("/health", (req, res) => {
            res.json({
                msg: "online"
            })
        });

        this.app.use('/login', function (req, res, next) {
            if (req.isAuthenticated()) {
                return res.redirect('/dashboard');
            }
            next();
        });

        this.app.use(routes);
    }
}

export default new App().app;
