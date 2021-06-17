const mongoose= require('mongoose');

const DB= 'mongodb+srv://mernhooper:ADITYA@11111@cluster0.nhljj.mongodb.net/mernhopper?retryWrites=true&w=majority'



mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false

}).then(()=>{
    console.log("connection done");
}).catch((err)=> console.log(`no connection`));