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
                                    src="images/curelogo.png"
                                />
                                <div className="below-footer-txt">
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
                            <Col> 
                            <ul className="footer-social-link">
                            <li><img className='social-Img'  src="images/fb.png" alt='fb' /></li>
                            <li><img className='social-Img'  src="images/insta.png" alt='fb' /></li>
                            <li><img className='social-Img'  src="images/twittr.png" alt='fb' /></li>
                            <li><img className='social-Img'  src="images/linkdin.png" alt='fb' /></li>
                            <li><img className='social-Img'  src="images/utube.png" alt='fb' /></li>
                        </ul>
                        </Col>
                        </Col>

                      
                       
                    </Row>
                   
               </Container>
            </footer>
        )
    }

}

export default connect()(Footer);