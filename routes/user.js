const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


const userController = require("../controllers/users.js");



router
    .route("/signup")
    .get(userController.renderSignupForm )
    .post(wrapAsync(userController.signup));



router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), 
        userController.login);



//logout
router.get("/logout", userController.logout);


//privacy
router.get("/privacy", (req, res) => {
    res.render("pages/privacy");
});


//terms
router.get("/terms", (req, res) => {
    res.render("pages/terms");
});


//cookies
router.get("/cookies", (req, res) => {
    res.render("pages/cookies");
});


//gdpr
router.get("/gdpr", (req, res) => {
    res.render("pages/gdpr");
});

//about us
router.get("/about", (req, res) => {
    res.render("pages/about");
});


//contact
router.get("/contact", (req, res) => {
    res.render("pages/contact");
});

//help
router.get("/help", (req, res) => {
    res.render("pages/help");
});


//carrers
router.get("/careers", (req, res) => {
    res.render("pages/careers");
});




module.exports = router;