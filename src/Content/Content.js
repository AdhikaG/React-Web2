import React, { Component } from 'react';
import './Content.css';
import {Card,Button} from 'react-bootstrap';
import Cimage1 from './Cimage1.png';
import Cimage2 from './Cimage2.png';
import Cimage3 from './Cimage3.png';
import Cimage4 from './Cimage4.png';
import Cimage5 from './Cimage5.png';
import Cimage6 from './Cimage6.png';


class Content extends Component{

    render(){

        return(
                <div className="Content1">                    
                    <div className="first-card">
                        <Card style={{ width: '18rem',border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage1} />
                                 <Card.Body>
                                   <Card.Title>Time Efficient</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div>

                                    <div className="second-card">
                        <Card style={{ width: '18rem',border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage2} />
                                 <Card.Body>
                                   <Card.Title>Join Our Trader Comunity</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div> 

                    <div className="third-card">
                        <Card style={{ width: '18rem',border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage3} />
                                 <Card.Body>
                                   <Card.Title>Plan Your Future</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div> 
     
                    <div className="fourth-card">
                        <Card style={{ width: '18rem',border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage4} />
                                 <Card.Body>
                                   <Card.Title>Monitor Your Stocks</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div> 
     
                    <div className="fifth-card">
                        <Card style={{ width: '18rem' ,border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage5} />
                                 <Card.Body>
                                   <Card.Title>Get Instand Information</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div> 

                    <div className="sixth-card">
                        <Card style={{ width: '18rem' ,border:'2px solid #43E547' }}>
                              <Card.Img variant="top" src={Cimage6} />
                                 <Card.Body>
                                   <Card.Title>Exchange Stock Information</Card.Title>
                                      <Card.Text>
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                        </Card.Text>
                                   <Button variant="dark">Go somewhere</Button>
                              </Card.Body>
                        </Card> 
                            
                    </div> 
                 </div>


                
                    
                
       );
    }
}


export default Content;