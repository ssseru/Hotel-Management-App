import React from "react";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-5">The Platinum Lounge.</h1>
        <p className="lead">Hotel Management Application</p>
        <hr className="my-2" />
        <p>Made using MERN stack.</p>
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/allrooms">Rooms</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/bookedrooms">Booked Rooms</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/addroom">Add a New room</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Header;
