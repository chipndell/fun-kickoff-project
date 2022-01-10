const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema  = mongoose.Schema;

const AvailabilityDay = new Schema({
  day: { type: Number },
  duration: {
    from: { type: Number },
    to: { type: Number }
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  first_name:{
    type: String,
    required: false,
  },
  last_name:{
    type: String,
    required: false,
  },
  date_of_birth:{
    type: Date,
    required: false,
  },
  phone_number:{
    type: Number,
    required: false,
  },
  location:{
    type: String,
    required: false,
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: false,
  },
  availability:{
    type: [AvailabilityDay],
    required: false,
  },

});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("user", userSchema);
