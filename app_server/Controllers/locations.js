/* GET 'home' page */
const homelist = function (req, res) {
    res.render('data', {
        title: 'Graphics Cards',
        GraphicsCards:
            [
                {
                    name: 'Nvidia RTX 4070 Super',
                    price: '€356.99',
                    rating: 3,
                    sale: '20%'
                },
                {
                    name: 'Nvidia RTX 4080 Super',
                    price: '€566.99',
                    rating: 4,
                    sale: '10%'
                },
                {
                    name: 'Nvidia RTX 4060',
                    price: '€296.99',
                    rating: 3,
                    sale: '0%'
                },
                {
                    name: 'Nvidia RTX 4090',
                    price: '€756.99',
                    rating: 5,
                    sale: '35%'
                }
            ]
    });

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
