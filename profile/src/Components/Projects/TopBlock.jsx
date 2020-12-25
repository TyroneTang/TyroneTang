import React from 'react'
import {Container, Col} from "react-bootstrap";

function TopBlock() {
    return (
        <div className="parallax d-flex align-items-start pb-5">
        <Container className="pt-5 animate__animated animate__fadeInDown animate__slow">
          <Col md={12} sm={12} className="border-top border-bottom border-dark mt-5">
                  <div className="py-2">
                  <h3 className="text-dark">HELLO, I'M TYRONE</h3>
                  </div>
                  <div className="py-2">
                  <h3 className="text-dark">About me:</h3>
                  </div>
                  <div className="py-2">
                  <h5 className="text-dark">"AN ASPIRING SOFTWARE ENGINEER WHO'S ALWAYS UP FOR FRESH IDEAS AND NEW CHALLENGES. <br/>
                        I'M READY TO EMBARK ON THIS NEW JOURNEY OF LIFE-LONG LEARNING IN THE FIELD OF TECHNOLOGY."</h5>
                  </div>             
                </Col>
          </Container>

        </div>   
    )
}

export default TopBlock
