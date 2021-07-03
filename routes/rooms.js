const router = require("express").Router();
let Room = require("../models/room.model");

// Getting all the rooms
router.route("/").get((req, res) => {
  Room.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting all booked rooms
router.route("/booked").get((req, res) => {
  Room.find({ isBooked: true })
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json("Error: " + err));
});

// adding a new room into the database
router.route("/add").post((req, res) => {
  const roomNo = req.body.roomNo;
  const roomType = req.body.roomType;
  const isBooked = false;

  const newRoom = new Room({
    roomNo,
    roomType,
    isBooked,
  });

  newRoom
    .save()
    .then(() => res.json("Room added in Hotel Database!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// getting info about a room
router.route("/:id").get((req, res) => {
  Room.findById(req.params.id)
    .then((room) => res.json(room))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete a room
router.route("/:id").delete((req, res) => {
  Room.findByIdAndDelete(req.params.id)
    .then(() => res.json("Room removed"))
    .catch((err) => res.statusCode(400).json("Error: " + err));
});

// for reverting the status of the room to unbook
router.route("/unbook/:id").post((req, res) => {
  Room.findByIdAndUpdate(req.params.id)
    .then((room) => {
      room.isBooked = false;
      room.roomUser = "";
      room
        .save()
        .then(() => res.json("Room Status changed to unbooked!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.statusCode(400).json("Error: " + err));
});

// for booking the room
router.route("/book/:id").post((req, res) => {
  Room.findByIdAndUpdate(req.params.id)
    .then((room) => {
      //   room.roomId = req.body.roomId;
      //   room.roomType = req.body.roomType;
      room.isBooked = true;
      room.dateOfBooking = req.body.date;
      room.roomUser = req.body.roomUser;

      room
        .save()
        .then(() => res.json("Room Booked!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
