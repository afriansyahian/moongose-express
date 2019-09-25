var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phoneNumber: String,
  address:[
  {
    type: Schema.Types.ObjectId,
    ref: "Address"
  }
  ]
},
{ timestapms: true}
);
const User = mongoose.model("users", userSchema);

module.exports = User;