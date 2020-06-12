//const { useState } = require("react") - not sure when this const put itself here??
import React, {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalHeader, Jumbotron, Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,Card, 
CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Media} from 'reactstrap';


  const Intro = () => {
      return (
        <div className='intro'>
          <Jumbotron className="jumbo">
              <h1 id="introHeadline">Web Developer, Problem Solver</h1>
              <p id="welcome">Hi, I'm Zach. If you are looking for a web developer, you have come to the right place! Whether you need
              a basic website for a small business, a Multi-Component app for a large enterprise, or a Full-Stack Web Application, I 
              can build it.</p>
          </Jumbotron>
          <Container className="projectThumbnails">
            <Row>
              <Col xs='6'>
                <Card className="cards">
                  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                  <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button className="button">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs='6'>
                <Card className="cards">
                  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                  <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button className="button">Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs='6'>
                <Card className="cards">
                  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                  <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button className="button">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs='6'>
                <Card className="cards">
                  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                  <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button className="button">Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )
  }

  export default Intro;