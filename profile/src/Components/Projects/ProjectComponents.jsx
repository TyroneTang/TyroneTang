import React from 'react'
import {Container, Col, Row, Card} from "react-bootstrap";

function ProjectComponent({index, name, description, link, placeholder,image}) {
    return (
    <Col md={3} sm={6}>
        <div className="">
            <div className="py-2">
              <h3 className="text-white">{index}</h3>
            </div>
            <div className="py-2">
              <p className="text-white font-weight-bold">{name}</p>
            </div>
            <div className="border">
                <img src={image} fluid/>
            </div>
            <div className="py-2 textblock"> 
              <p className="text-white">{description}</p>
            </div>
        </div>
        <div>
        <div className="py-2"> 
          <h6 className="text-white">Link:</h6> <a className="text-white" href={link} target="_blank">{placeholder}</a>
        </div>
        </div>
      </Col>
    )
}

export default ProjectComponent
