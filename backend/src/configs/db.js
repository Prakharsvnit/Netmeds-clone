const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sandeep:sandeep@12345@cluster0.ozlxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
