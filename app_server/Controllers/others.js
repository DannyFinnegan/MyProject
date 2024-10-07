/* GET home page */
   const data = function(req, res){
   res.render('index', { title: 'About' });
   };
    module.exports = { 
    data,
    };