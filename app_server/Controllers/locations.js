const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://myproject-cnnc.onrender.com;' 
}

/* GET 'home' page */
const homelist = function(req, res){
    const path = '/api/locations'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {}, 
    }; 
    const homelist = function(req, res){
        const path = '/api/locations'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}, 
        qs : { 
        lng : -0.9690884, 
        lat : 51.455041, 
        maxDistance : 20 
        } 
        }; 
        request(
            requestOptions, function(err, response, body) {
                _renderHomepage(req, res, body); 
            }
        );
    };

    const _renderHomepage = function(req, res, responseBody){
        res.render('locations-list', {
            title: 'Irish Computer Components',
            pageHeader: {
                title: 'Irish Computer Components',
            },
            locations: responseBody
        });
    };
        
        
    };
    
    
/* GET 'Location info' page */
const register = function (req, res) {
    res.render('register', { title: 'Register User' });
};
/* GET 'Add review' page */
const login = function (req, res) {
    res.render('login', { title: 'Login User' });
};

module.exports = {
    homelist,
    register,
    login
};
