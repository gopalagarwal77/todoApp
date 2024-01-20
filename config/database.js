
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL
     //   useNewUrlParser: true,
     //   useUnifiedTopology: true
    )
    .then(() => console.log("DB ka CONNECTION ISS Sucessful"))
    .catch((error)=>{
        console.log(`Error in DB connection ${error}`);
        console.error(error.message);
        process.exit(1);
    });
}
module.exports=dbConnect;
