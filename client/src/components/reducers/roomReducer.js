import {
  FETCH_ROOMS,
  FETCH_BOOKED_ROOMS,
  NEW_ROOM,
  REMOVE_ROOM,
} from "../actions/types";

const initialState = {
  rooms: [],
  room: {},
};

export default function fun(state = initialState, action) {
  switch (action.type) {
    case FETCH_ROOMS:
      // console.log("Fetch Task reducer");
      return {
        ...state,
        rooms: action.payload,
      };
    case FETCH_BOOKED_ROOMS:
      // console.log("Fetch Task reducer");
      return {
        ...state,
        rooms: action.payload,
      };
    case NEW_ROOM:
      // console.log("New Task reducer");
      return {
        ...state,
        room: action.payload,
      };
    case REMOVE_ROOM:
      // console.log("Remove Task reducer");
      return {
        ...state,
        room: action.payload,
      };
    default:
      return state;
  }
}
