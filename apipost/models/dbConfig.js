const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://posts:posts123@posts.qlgpmz8.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
)