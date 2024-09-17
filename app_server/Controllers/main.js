/* GET home page */
const index = function(req, res){ 
    res.render('index', { title: 'Express' }); 
    };
    const about = function(req, res){ 
        res.render('index', { title: 'About' }); 
        };
    module.exports = { 
    index,
    about
    };
    