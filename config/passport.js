const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy
const { check, validationResult } = require('express-validator');

passport.serializeUser((id, done)=>{
	done(null, user.id)
});

passport.deserializeUser((id, done)=>{
	User.findById(id, (error, user)=>{
		done(error, user)
	});
});

passport.use('local.signin', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
},
(req, email, password, done)=>{
	req.checkBody('email', 'Invalid email').notEmpty().isEmail()
	req.checkBody('password', 'Invalid password').notEmpty()
	const errors = req.validationErrors()
	if (errors) {
	const messages = []
	errors.forEach((error)=>{
		messages.push(error.msg)
	})
	return done(null, false, req.flash('error', messages))
}
User.findOne({'email': email}, (error, user)=>{
	if (error){
		return done(error)
	}
	if (!user) {
		return done(null, false, {messages: 'invalid login credentials.'})
	}
	if (!user.validPassword(password)) {
		return done(null, false, {messages: 'invalid login credentials.'})
	}
		return done(null, user)
	})
}))


passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
},
(req, email, password, done)=>{
	req.checkBody('email', 'Invalid email').notEmpty().isEmail()
	req.checkBody('password', 'Invalid password').notEmpty()
	const errors = req.validationErrors()
	if (errors) {
	const messages = []
	errors.forEach((error)=>{
		messages.push(error.msg)
	})
	return done(null, false, req.flash('error', messages))
}
User.findOne({'email': email}, (error, user)=>{
	if (error){
		return done(error)
	}
	if (user) {
		return done(null, false, {messages: 'invalid login credentials.'})
	}
	const newUser = new User()
	newUser.email = email
	newUser.password = password
	newUser.save((error, result)=>{
		if(error){
			return done(error)
		}
		return done(null, newUser)
		
		});
	});
}));

