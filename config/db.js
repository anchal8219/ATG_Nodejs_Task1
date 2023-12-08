const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://anchal123:QKWCwV1Ws0oxTXRn@cluster0.lwdemmy.mongodb.net/"

const connDB = ()=>{
    return mongoose.connect(mongodbUrl)
    // .then(() => console.log('Connected!'));

}

module.exports={connDB};


