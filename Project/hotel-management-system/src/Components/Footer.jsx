import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="border-top bg-white mt-5">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                   
                       
                       
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <a href="https://github.com/dhakshanasreeb">
                                 <FaFacebookSquare className="connect text-dark" /></a>
                             <a href="https://github.com/dhakshanasreeb">
                                 <FaLinkedin className="connect text-dark" /></a>
                             <a href="https://github.com/dhakshanasreeb">
                                 <AiFillInstagram className="connect text-dark" /></a>
                             <a href="https://github.com/dhakshanasreeb">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer