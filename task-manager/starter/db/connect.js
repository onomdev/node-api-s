const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://REI:pussyhunter@nodeexpressprojects.0t9ar.mongodb.net/TaskManager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
