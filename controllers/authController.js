const passport = require('passport');

exports.autenticarUsuario = passport.authenticate('local', {
    sucessRedirect: '/ok',
    failureRedirect : '/mal'
})