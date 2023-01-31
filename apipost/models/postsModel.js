const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "node-api",
  {
    Title: {
      type: String,
      required: true
    },
    contenu: {
      type: String,
      required: true
    },
    
  },
  "posts"
);

module.exports = { PostsModel };