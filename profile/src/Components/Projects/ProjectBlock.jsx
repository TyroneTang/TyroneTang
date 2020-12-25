import React, { useState } from 'react'
import ProjectComponents from "./ProjectComponents"
import {Container, Col, Row} from "react-bootstrap";
import project1 from "../../Images/project1.png"
import project2 from "../../Images/project2.png"
import project3 from "../../Images/project3.png"
import project4 from "../../Images/project4.png"

function ProjectBlock() {
    const [project, setProject] = useState(
        [
          {
            name: "CARD STACKER",
            description: "Very much like the el clasico UNO game but with a twist i.e. with added reaction time, within a constrained time and to beat your past self! Stack as much points as possible within a limited time!",
            link: "https://tyronetang.github.io/CardStacker.github.io/",
            placeholder: "Card Stacker",
            image: project1
          },
          {
            name: "THE AISLE",
            description: "An e-commerce marketplace project single-handedly created by me, mimicking popular platforms such as Lazada, Shopee and Amazon. Features include shopping cart, wish list, product comments, product rating and reviews, alongside a fully functional login, register and signup page.",
            link: "https://aisletxt.herokuapp.com/",
            placeholder: "The Aisle",
            image: project2
          },
          {
            name: "Mum's Workshop",
            description: "With the intention of helping out a team mate's family's side business, we created an e-commerce platform selling flowers, bouquet and other flower gifts. Features include shopping cart, wish list, product comments, fully functional profile page and in addition, a customisable function for the bouquet wraps and ribbons.",
            link: "https://theblossomingflower.herokuapp.com/",
            placeholder: "Mum's Workshop",
            image: project3
          },
          {
            name: "BETTER ATHLETES",
            description: "The inspiration of this team project stemmed from the need to improve existing Athlete/Coach fitness tracking app in the market. While we are able to retain all the features available in other apps, the key difference of Better Athlete is the user ability to track and update results of each reps and sets upon completion.",
            link: "https://better-athletes.herokuapp.com/",
            placeholder: "Better Athletes",
            image: project4
          },
        ]
      )




    return (
        <div className="d-flex align-items-center parallax py-5">
        <Container className="pagediv animate__animated animate__fadeInDown animate__slow">
            <Col md={12} sm={12} className="border-top border-bottom border-3 my-3 py-3">
              <div>
                <h3 className="text-white py-2">My GENERAL ASSEMBLY Projects:</h3>
              </div>
              <div className="no-gutters">
                <Row>
                  <ProjectComponents index={1} name={project[0].name} description={project[0].description} link={project[0].link} placeholder={project[0].placeholder} image={project[0].image}/>
                  <ProjectComponents index={2} name={project[1].name} description={project[1].description} link={project[1].link} placeholder={project[1].placeholder} image={project[1].image}/>
                  <ProjectComponents index={3} name={project[2].name} description={project[2].description} link={project[2].link} placeholder={project[2].placeholder} image={project[2].image}/>
                  <ProjectComponents index={4} name={project[3].name} description={project[3].description} link={project[3].link} placeholder={project[3].placeholder} image={project[3].image}/>
                </Row>
              </div>
            </Col>
            
        </Container>
      </div>
    )
}

export default ProjectBlock
