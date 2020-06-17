import React from "react";
import { Row, Col, Button, Form, Spinner, Alert, Container } from "react-bootstrap";
const url ="https://striveschool.herokuapp.com/api/profile/"
const username ='user19'
const password = 'Hxx8R4wZfCANamrj'


const headers =new Headers({
    "Content-Type" : "application/json",
    'Authorization': 'Basic ' + 'btoa(username + ":" + password)',
});

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservation: {
        name: "",
        surname: "",
        area: "",
        bio: "",
        email: "",
        title: "",
        image: ""
      },
      isLoading: false,
      errMess: ""
    };
  }

  submitReservation = async e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: headers,
      });
      if (response.ok) {
        alert('Reservation saved!');
        this.setState({
          isLoading: false,
          errMess: "",
          reservation: {
            name: "",
            surname: "",
            area: "",
            bio: "",
            email: "",
            title: "",
            image: ""
          }
        });
      } else {
        let json = await response.json();
        this.setState({
          errMess: json.message,
          isLoading: false
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errMess: err.message,
        isLoading: false
      });
    }
  };

  updateReservationField = input => {
    let reservation = this.state.reservation;
    let currentId = input.currentTarget.id;

    switch (currentId) {
      case "image":
        reservation[currentId] = input.currentTarget.value;
        break;
      default:
        reservation[currentId] = input.currentTarget.value;
    }

    this.setState({ reservation: reservation });
  };

  render() {
    return (
      <Container>
      <div className="mb-3">
        {this.state.errMess.length > 0 && (
          <Alert variant="danger">
            We encountered a problem while processing your request:{" "}
            {this.state.errMess}
          </Alert>
        )}
        <h3>Enter your profiles details</h3>
        {
          this.state.isLoading && (
            <div className="d-flex justify-content-center my-5">
            
              <div className="ml-2">
                <Spinner animation="border" variant="success" />
              </div>
            </div>
          )
        }
        <Form onSubmit={this.submitReservation}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.reservation.name}
                  onChange={this.updateReservationField}
                />
              </Form.Group>
            </Col>
            <Form.Group className="col-md-6">
              <Form.Label htmlFor="phone">Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                id="surname"
                placeholder="Your phone"
                value={this.state.reservation.surname}
                onChange={this.updateReservationField}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="Bio">
                 Bio
              </Form.Label>
              <Form.Control
                type="text"
                name="bio"
                id="bio"
                placeholder="Your Bio"
                value={this.state.reservation.bio}
                onChange={this.updateReservationField}
              />
              </Form.Group>
            </Col>
            <Col md={2} className="flex flex-column align-self-end">
              <Form.Group>
              <Form.Label htmlFor="Bio">
                 Area
              </Form.Label>
              <Form.Control
                type="text"
                name="area"
                id="area"
                placeholder="Your phone"
                value={this.state.reservation.area}
                onChange={this.updateReservationField}
              />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="dateTime">email</Form.Label>
                <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="Your phone"
                value={this.state.reservation.email}
                onChange={this.updateReservationField}
              />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="specialRequests">Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.reservation.title}
                  onChange={this.updateReservationField}
                />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
            <Col md={12}>
            <Form.Group>
                <Form.Label htmlFor="Image">Image</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  id="image"
                  value={this.state.reservation.image}
                  onChange={this.updateReservationField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      </Container>
    );
  }
}

export default ProfileForm;