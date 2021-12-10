const mongoose = require("mongoose")

/*mongoose.connect('mongodb://localhost/car-care')
.then((db)=> console.log("Se conecto a mongo"))
.catch((err)=> console.error(err));*/

mongoose.connect('mongodb+srv://kevin:kevin123@cluster0.eoujv.mongodb.net/test')
.then((db)=> console.log("Se conecto a mongo"))
.catch((err)=> console.error(err));