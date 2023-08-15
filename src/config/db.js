const { connect } = require("mongoose");

const URL = "mongodb+srv://Agustin:mnP0J2BcLDhIjno1@cluster0.ayuhxw2.mongodb.net/?retryWrites=true&w=majority"

connect(URL)
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
})