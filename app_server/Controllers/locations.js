/* GET 'home' page */
const homelist = function (req, res) {
    res.render('data', {
        GPU: 'Graphics Cards',
        CentPU: 'Central Processing Units',
        graphicsCards:
            [  {
                    name: 'Nvidia RTX 4060',
                    price: '€296.99',
                    rating: 3,
                    image: 'images/4060Regular.jpg'
                },
                {
                    name: 'Nvidia RTX 4070 Super',
                    price: '€356.99',
                    rating: 3,
                    sale: ' 20%',
                    image: 'images/4070Super.jpg'
                },
                {
                    name: 'Nvidia RTX 4080 Super',
                    price: '€566.99',
                    rating: 4,
                    sale: ' 10%',
                    image: 'images/4080Super.jpg'
                },
              
                {
                    name: 'Nvidia RTX 4090',
                    price: '€756.99',
                    rating: 5,
                    sale: ' 35%',
                    image: 'images/4090Regular.jpg'
                }
            ],
        CentralProcessingUnits:
        [
        {
            name: 'Ryzen 7 5700X',
            price: '€126.99',
            rating: 4,
            image: 'images/Ryzen75800XCPU.jpg'
        },
        {
            name: 'Ryzen 9 7900x',
            price: '€526.99',
            rating: 5,
            sale: ' 50%',
            image: 'images/Ryzen97900XCPU.jpg'
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
