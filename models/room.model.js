const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    roomNo: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    isBooked: { type: Boolean, required: true },
    dateOfBooking: { type: Date },
    roomUser: { type: String },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
