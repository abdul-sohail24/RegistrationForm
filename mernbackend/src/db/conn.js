const mongoose = require('mongoose'); 

//then & catch is similar to try & catch

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/employeeRegistration", { 
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`No connection`);
})