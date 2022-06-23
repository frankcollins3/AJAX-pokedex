const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig')

router.get('/signup', (req, res) => {
//  let { robot } = req.flash('robot', 'are you a robot') // 2 flash messages stocked on each other o.O
let { robot } = res.locals.robot
  res.render('auth/signup', { robot })
})

router.get('/login', (req, res) => {
  res.render('auth/login', {hoverflash: 'hover over me!'})
//   req.flash('hover', 'hover over me!')
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(([user, created]) => {
        if (created) {
            // If created, success and redirect back to home
            console.log(`${user.name} successful create!`)
            // Flash message
            const successObject = {
                successRedirect: '/',
                successFlash: 'Great! Lets go Home!'
            }
            // req.flash('success', 'iloveyou')
            passport.authenticate('local', successObject)(req, res)
        } else {
            // Email already exists
            req.flash('error', 'Email already exists')
            res.redirect('/auth/signup')
        }
    }).catch(err => {
        console.log('Error: ', err)
        // req.flash('error', 'Either email or password is incorrect. Please try again.')
        req.flash('error', 'oh no we have err')
        res.redirect('/auth/signup')
    })
})

router.post('/login', passport.authenticate('local', {
    // successRedirect: `https://www.google.com`,
    successRedirect: '/', 
    failureRedirect: '/auth/login',
    // failureRedirect: '/auth/login',
    successFlash: 'Welcome back!',
    failureFlash: 'Either email or password is incorrect. Please try again.'
}))

router.get('/logout', (req, res) => {
    req.logout( (err) => {              // [req.logout()]         for added security: passport now requires a callback function within the invocation of the [req].FLASH()method
        if (err) { return next(err)}
        req.flash('logoutflash', 'Well... Come Back!')
        req.flash('signinsuccess', 'hi')        // was trying to have this become an empty string and change the original: app.use()
        res.redirect('/')
        // res.render('/', {logout: 'yeah we did'})
    })
})


module.exports = router

