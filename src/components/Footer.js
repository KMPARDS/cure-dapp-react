import React,{Component} from 'react'
import { Col,Row,Button,Container,Figure } from 'react-bootstrap'
import { connect } from 'react-redux'
import {SocialIcon} from 'react-social-icons'


class Footer extends Component{
    render(){
        return(
            <footer>
               <Container ClassName="" >
                    <Row>
                        <Col ClassName="subscribe">
                            <p>Subscribe for Newsletter</p>
                            <p>Sign up with email address to receive news and updates</p>
                        </Col>
                        <Col>
                                <div className="footer-input">
                                    <input class="input-field-footer" type="text" placeholder="Email id" />                       
                                    <button className="send-btn-footer">Send</button>
                                    </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="images/page.jpg"
                                />
                                <div>
                                    It is long estaiblished fact that reader can be distracted by a readable content
                                </div>
                            </Figure>

                        </Col>
                        <Col> 
                            <Row>
                                <Col>
                                    <h2>Menu</h2>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </Col>
                                <Col>
                                <h2>Home</h2>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </Col>

                            </Row>
                        </Col>

                        <Col> 
                            <ul>
                                <li>+0123456789</li>
                                <li>xyz@gmail.com</li>
                            </ul>
                      
                            <ul className="footer-social-link">
                            <li><SocialIcon url="http://facebook.com" /></li>
                            <li><SocialIcon url="http://twitter.com" /></li>

                            <li><SocialIcon url="http://youtube.com" /></li>

                            <li><SocialIcon url="http://twitter.com" /></li>

                            <li><SocialIcon url="http://twitter.com" /></li>
                        </ul>
                      
                        </Col>
                       
                    </Row>
                   
               </Container>
            </footer>
        )
    }

}

export default connect()(Footer);