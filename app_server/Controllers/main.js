/* GET home page */
const index = function(req, res){ 
    res.render('index', { title: 'Express' }); 
    };
const about = function(req, res){ 
    res.render('index', { title: 'About' }); 
    };
const register = function(req, res){ 
    res.render('Register', { title: 'Register' }); 
    };
const login = function(req, res){ 
    res.render('Login', { title: 'Login' }); 
    };
const data = function(req, res){ 
    res.render('data', { title: 'data' }); 
    };
    module.exports = { 
    index,
    about,
    register,
    login,
    data
    };