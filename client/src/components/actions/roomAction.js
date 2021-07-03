import {
  FETCH_ROOMS,
  FETCH_BOOKED_ROOMS,
  NEW_ROOM,
  REMOVE_ROOM,
} from "./types";

export const fetchRooms = () => (dispatch) => {
  console.log("Fetch Rooms action");
  fetch("http://localhost:5000/rooms")
    .then((res) => res.json())
    .then((rooms) =>
      dispatch({
        type: FETCH_ROOMS,
        payload: rooms,
      })
    );
};

export const fetchBookedRooms = () => (dispatch) => {
  console.log("Fetch Booked Rooms action");
  fetch("http://localhost:5000/rooms/booked")
    .then((res) => res.json())
    .then((rooms) =>
      dispatch({
        type: FETCH_BOOKED_ROOMS,
        payload: rooms,
      })
    );
};

export const createRoom = (roomData) => (dispatch) => {
  console.log("Create Room action");
  fetch("http://localhost:5000/rooms/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(roomData),
  })
    .then((res) => res.json())
    .then((room) =>
      dispatch({
        type: NEW_ROOM,
        payload: room,
      })
    );
};

export const deleteRoom = (id) => (dispatch) => {
  // console.log("Delete Task action");
  // console.log(id);
  // console.log(`http://localhost:5000/tasks/${id}`);
  fetch("http://localhost:5000/rooms/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((room) =>
      dispatch({
        type: REMOVE_ROOM,
        payload: room,
      })
    );
};
