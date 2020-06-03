import React, { Component } from 'react'
import { Container,Row, Col, Dropdown, Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import  '../../../App.css';

class Step4 extends Component{
    render(){
        return(
            <div className="stepdiv">
                <Container ClassName="stepcontainer">
                    <Row ClassName="steprow">
                        <Form>
                            <Form.Group>
                                <Form.Label><h2>Estaiblishment basic details</h2></Form.Label><br/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Estaiblishment name</Form.Label>
                                    <Form.Control placeholder="Estaiblishment name" type="text" />
                            </Form.Group>

                            <Form.Group ClassName="step2" controlId="exampleForm.ControlSelect1">
                                <Form.Label>ControlCity</Form.Label>
                                <Form.Control as="text" placeholder=""/>
                            </Form.Group>
                            <Form.Group ClassName="step2" controlId="exampleForm.ControlGender">
                                <Form.Label>Locality</Form.Label>
                                <Form.Control as="text" placeholder=""/>
                            </Form.Group>
            
                            <Button>
                                Finish
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect()(Step4);