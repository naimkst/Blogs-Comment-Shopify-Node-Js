const { mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
  title: String,
  blogId: String,
  commentId: String,
  name: String,
  email: String,
  comment: String,
  status: String,
});

module.exports = mongoose.module("Comment", commentSchema);
