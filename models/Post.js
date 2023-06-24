const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  image: String,
  rating: { type: Number, min: 0, default: 0 },
});

module.exports = model("Post", PostSchema);
