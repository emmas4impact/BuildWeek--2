import React, { Component } from 'react';
import { FaPlusCircle, FaChevronDown } from 'react-icons/fa';
import {Container} from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'


class Skills_Endorsements extends Component {
    render() {
        return (<>
         
            <Container>
            <Row>
            <Col sm={8}>
              <div id="accordion">
                <div class="card">
                    

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                       <h1>Skills&Endorsements</h1>
                       <h6 className="mt-4"><FaPlusCircle /> Full-Stack Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Back-End Development</h6>
                       <hr></hr>
                       <h6><FaPlusCircle /> Front-End Development</h6>
                       <hr></hr>
                       <p></p>
                       <p></p>
                    </div>
                    </div>
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0" style={{textAlign: "center"}}>
                        <button   class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Show More <FaChevronDown />
                        </button>
                    </h5>
                    </div>
                    </div>
                    </div>
            </Col>
                    <Col sm={4}>
                    </Col>
            </Row>

</Container>
  </>
        );
    }
}

export default Skills_Endorsements;