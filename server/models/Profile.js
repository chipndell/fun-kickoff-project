const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const AvailabilityDay = new Schema({
  day: { type: Number },
  duration: {
    from: { type: Number },
    to: { type: Number }
  }
});

const profileSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: false,
  },
  lastName:{
    type: String,
    required: false,
  },
  dateOfBirth:{
    type: Date,
    required: false,
  },
  phoneNumber:{
    type: Number,
    required: false,
  },
  location:{
    type: String,
    required: false,
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

profileSchema.methods.matchPassword = async function (enteredPassword) {
};


module.exports = User = mongoose.model("profile", profileSchema);
