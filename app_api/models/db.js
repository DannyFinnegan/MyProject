const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://dannyfinnegan:ComputerComponents@cluster0.3atlb.mongodb.net/ComputerComponents?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
    .then(() => {
        console.log("Mongoose is connected");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

require('./products');