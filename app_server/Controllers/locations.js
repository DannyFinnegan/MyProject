/* GET 'home' page */
const homelist = function(req, res){
    res.render('data', { title: 'Home' });
    };
    /* GET 'Location info' page */
    const register = function(req, res){
    res.render('register', { title: 'Register User' });
    };
    /* GET 'Add review' page */
    const login = function(req, res){
    res.render('login', { title: 'Login User' });
    };
    
    module.exports = {
    homelist,
    register,
    login
    };
    