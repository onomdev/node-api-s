const mongoose = require("mongoose");

// only what we provide here in the schema gets passed to the db
const TaskSchema = new mongoose.Schema({
  //basic validators
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
