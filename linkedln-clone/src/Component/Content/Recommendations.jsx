import React, { Component } from 'react';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
class Recommendations extends Component {
    render() {
        return (
         
                 <Row>
            <Col sm={8}>
                <Jumbotron fluid>
  <Container>
      <Row>
  <Col sm={3}>
    <h3>Recommendations</h3>
    </Col>
    <Col sm={3}></Col>
    <Col sm={3}>
    <h3>Recommendations</h3>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    </Col>
    <Col sm={3}>
    <h3>Recommendations</h3>
    </Col>
    </Row>
  </Container>
</Jumbotron>
</Col>
<Col sm={4}>
    </Col>
</Row>        
        );
    }
}

export default Recommendations;