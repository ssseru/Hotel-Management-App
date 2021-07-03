import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import AllRooms from "./AllRoomsComponent";
import AddRoom from "./AddRoomComponent";
import BookedRooms from "./BookedRoomsComponent";

import "../App.css";

export default function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/allrooms" component={AllRooms} />
        <Route path="/addroom" component={AddRoom} />
        <Route path="/bookedrooms" component={BookedRooms} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
