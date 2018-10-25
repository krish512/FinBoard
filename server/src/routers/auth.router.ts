import * as express from 'express';
import * as passport from 'passport';

const router = express.Router();


router.get("/google", passport.authenticate('google', { scope: ['profile', 'email', 'openid'], }));

router.get("/google/redirect", passport.authenticate("google", { failureRedirect: '/login' }), (req, res) => {
    res.redirect("/dashboard")
    
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
})

router.get('/authenticated', (req, res) => {
    return res.json({ "isAuthenticated": req.isAuthenticated(), "user": req.user });
})


export default router;
