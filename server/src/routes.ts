import * as express from "express";
import * as path from "path";
import routers from "./routers";

let router = express.Router();

let authenticationMiddleware = () => {
    return (req, res, next) => {
        if (req.isAuthenticated() || req.path == "/login") {
            return next()
        }
        return next()
        // res.redirect('/login');
    }
}

router.use("/auth", routers.authRouter);
router.use(authenticationMiddleware());

router.use("/api", routers.apiRouter);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});


export default router;
