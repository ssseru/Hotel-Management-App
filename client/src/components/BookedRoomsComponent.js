import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBookedRooms } from "./actions/roomAction";
import { Card, Container, Row, Col, Button } from "reactstrap";

class BookedRooms extends React.Component {
  componentDidMount() {
    this.props.fetchBookedRooms();
  }

  componentDidUpdate() {
    this.props.fetchBookedRooms();
  }

  handleCheckout = (id) => {
    fetch("http://localhost:5000/rooms/unbook/" + id, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    this.props.history.push({
      pathname: "/allrooms",
    });
  };
  render() {
    const bookedRoomsList = this.props.rooms.map((room) => (
      <div className="container" key={room._id}>
        <Card>
          <div>
            Room Number: <b>{room.roomNo} </b>
            <br />
            Room Type: {room.roomType}
            <br />
            Room Guest: {room.roomUser}
            <br />
            Date of Booking: {room.dateOfBooking}
            <br />
          </div>
          <Button
            outline
            size="sm"
            color="danger"
            onClick={() => {
              this.handleCheckout(room._id);
            }}
          >
            Checking out
          </Button>
        </Card>
        <br />
      </div>
    ));
    return (
      <div>
        {bookedRoomsList.length > 0 ? (
          <Container>
            <Row>
              <Col xs="6">
                <b>Rooms Currently Booked:</b>
                <hr />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="6">
                <p>{bookedRoomsList}</p>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <b>No Rooms Booked</b>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

BookedRooms.propTypes = {
  fetchBookedRooms: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  rooms: state.rooms.rooms,
});

export default connect(mapStateToProps, { fetchBookedRooms })(BookedRooms);
