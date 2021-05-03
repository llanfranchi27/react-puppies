var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var puppySchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    breed: { type: String, default: "Mixed" }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Puppy", puppySchema);