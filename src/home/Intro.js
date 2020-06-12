//const { useState } = require("react") - not sure when this const put itself here??
import React, {useState, useEffet} from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Media
  } from 'reactstrap';


  const Intro = () => {
      return (
          <div className='intro'>
          <Jumbotron className="intro">
              <h1 id="introHeadline">Web Developer, Problem Solver</h1>
              <p id="welcome">Hi, I'm Zach. If you are looking for a web developer, you have come to the right place! Whether you need
              a Single-Page website for a small business, a Multi-Component app for a large enterprise, or a Full-Stack Web Application, I 
              can build it.</p>
          </Jumbotron>
          <Container className="intro">
            
          </Container>
          </div>
      )
  }

  export default Intro;