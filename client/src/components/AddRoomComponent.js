import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRoom } from "./actions/roomAction";

class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomno: "",
      roomtype: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    // e.preventDefault();

    const room = {
      roomNo: this.state.roomno,
      roomType: this.state.roomtype,
    };

    this.props.createRoom(room);
    this.props.history.push({
      pathname: "/home",
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="roomno">Enter Room No:</Label>
                <Input
                  type="number"
                  id="roomno"
                  name="roomno"
                  value={this.state.roomno}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="roomtype">Room Type Details:</Label>
                <Input
                  type="text"
                  id="roomtype"
                  name="roomtype"
                  value={this.state.roomtype}
                  onChange={this.onChange}
                />
              </FormGroup>

              <br />
              <Button type="submit" value="submit" color="success">
                Add Room to DB
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

AddRoom.propTypes = {
  createRoom: PropTypes.func.isRequired,
};

export default connect(null, { createRoom })(AddRoom);
