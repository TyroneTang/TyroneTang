import React from 'react'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ChevronBlock() {
    return (
        <div className="parallax py-5">
          <Container className="d-flex justify-content-center animate__animated animate__fadeInDown animate__slow">
            <div className="text-white text-center px-5 py-2 chevrondiv">
              <div>
                  <h5>Checkout my creations</h5>
                </div>
                <div>
                  <FontAwesomeIcon icon={faChevronDown}  />
                </div>
            </div>
          </Container>
        </div>
    )
}

export default ChevronBlock
