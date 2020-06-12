import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Resume from "../about/Resume";


const Footer = () => {
    return(
        <div className='footer'>
            <Container>
                <Row>
                    <Col xs="4">
                        <h6>Professional Profiles</h6>
                    </Col>
                    <Col xs="4">
                        <h6>Resume</h6>
                    </Col>
                    <Col xs="4">
                        <h6>Contact Me</h6>
                    </Col>
                </Row>
            </Container>
         
        </div>
    )
}

export default Footer;