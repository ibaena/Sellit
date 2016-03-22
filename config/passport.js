var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../models/user');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

passport.use('local-signup', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, username, password, done) {
    User.findOne({
      'username': req.body.username
    }, function(err, user) {
      if (err) {
        console.log('1-err');
        return (err);
      }
      if (user) {
        console.log('cannot create');
      } else {
        var body = req.body;
        var password = body.password;
        bcrypt.hash(password, null, null, function(err, hash) {
          var newUser = User({
            username: body.username,
            password: hash,
            bank: body.bank
          });

          newUser.save(function(err, newUser) {
            if (err) return console.error(err);
            return done(null, newUser);
          });
        });
      }
    });
  }));

passport.use('local-login', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, username, password, done) {
    User.findOne({
      'username': req.body.username
    }, function(err, user) {
      bcrypt.compare(password, user.password, function(err, res) {
        console.log(res);
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.password) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  User.find(_id, function(err, user) {
    done(err, user);
  });
});


module.exports = passport;
