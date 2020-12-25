import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { Container, Col } from "react-bootstrap";

function FooterBlock() {
    return (
        <div className="parallax d-flex align-items-end py-5">
        <Container className="pb-5 animate__animated animate__fadeInDown animate__slow">
        <Col md={12} sm={12} className="border-top border-bottom mb-5">
              <div className="my-4">
                <h3 className="footer-icons p-0 mr-3 text-white">Connect with me!</h3>
              </div>
              <div className="my-4">
              <a className="footer-icons p-0 mr-5 text-white" href="https://github.com/TyroneTang" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} /> GitHub Profile
                  </a>
                  <a className="footer-icons p-0 mr-5 text-white" href="https://www.linkedin.com/in/tyronetangxi/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn Profile
                  </a>
                  <a className="footer-icons p-0 mr-5 text-white" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faEnvelope}  /> tyronetang.xi@yahoo.com
                  </a>
                  <a className="footer-icons p-0 mr-5 text-white"  rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faMobile}  /> +65 8128-7008
                  </a>
              </div>                 
            </Col>
        </Container>
      </div>
    )
}

export default FooterBlock
