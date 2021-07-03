import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRooms, deleteRoom } from "./actions/roomAction";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AllRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      date: new Date(),
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchRooms();
  }

  componentDidUpdate() {
    this.props.fetchRooms();
  }

  handleRemove = (id) => {
    this.props.deleteRoom(id);
  };

  handleBooking = (p) => {
    this.setState({
      id: p,
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    console.log(this.state.name);
    // e.preventDefault();
    const roomData = {
      roomUser: this.state.name,
      date: this.state.date,
    };
    console.log(this.state.id);
    fetch("http://localhost:5000/rooms/book/" + this.state.id, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomData),
    });
  }

  render() {
    const roomsList = this.props.rooms.map((room) => (
      <div className="container" key={room._id}>
        {console.log(this.state.date.toLocaleDateString())}
        <Card style={{ background: "" }}>
          <div>
            Room Number:<b> {room.roomNo}</b>
            <br />
            Room Type: {room.roomType}
            <br />
            {room.isBooked ? (
              <div>
                <div>Room Guest: {room.roomUser} </div>
                <div>Date of Booking: {room.dateOfBooking}</div>
              </div>
            ) : (
              ""
            )}
          </div>
          {room.isBooked ? (
            <div></div>
          ) : (
            <Button
              outline
              size="sm"
              color="primary"
              onClick={() => {
                this.handleBooking(room._id);
              }}
            >
              Book Room
            </Button>
          )}

          <Button
            outline
            size="sm"
            color="danger"
            onClick={() => {
              this.handleRemove(room._id);
            }}
          >
            Remove Room from DB
          </Button>
        </Card>
        <br />
      </div>
    ));
    return (
      <Container>
        <Row>
          <Col xs="6">
            <b>All Rooms available in the hotel:</b>
            <hr />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="6">{roomsList}</Col>
          <Col xs="6">
            {this.state.id ? (
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Enter Guest Name:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </FormGroup>

                <br />
                <Button type="submit" value="submit" color="success">
                  Book room for the guest
                </Button>
              </Form>
            ) : (
              <p></p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

AllRooms.propTypes = {
  fetchRooms: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  deleteRoom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  rooms: state.rooms.rooms,
});

export default connect(mapStateToProps, { fetchRooms, deleteRoom })(AllRooms);
