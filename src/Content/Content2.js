import React, { Component } from 'react'
import './Content.css';
import {Button,Jumbotron,Row,Col,Image} from 'react-bootstrap';
import cardimage1 from './cardimage1.jpg'; 
import cardimage4 from './cardimage4.jpg';
import cardimage5 from './cardimage5.jpg';

 class Content2 extends Component {

    render() {
        return (
            <div className="Content2">
             
             
                <Jumbotron className="jumbotron">
                     <h1 className="content-text1"> Join Us Now At Milinieal Trader</h1>
                      <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                      </p>
                      <br></br>
                      <Row>
                            
                            <Col xs={10} md={4}>
                              <Image style={{marginLeft:'6%'}} src={cardimage1} thumbnail />
                            </Col>

                            <Col xs={10} md={3}>
                              <Image style={{ marginLeft:'15%',height:'309px'}} src={cardimage4} thumbnail />
                            </Col>

                            
                            <Col xs={10} md={4}>
                              <Image  style={{marginLeft:'15%' , height:'309px'}} src={cardimage5} thumbnail />
                            </Col>
                    </Row>
                      {/* <div className="content-image"><img src={cardimage1} alt="content1"></img> </div> */}
             
                      
                        <Button variant="secondary" size="lg" block>Learn more</Button>
                      
                </Jumbotron>
             
             
               
            </div>
        );
    }
}

export default Content2;