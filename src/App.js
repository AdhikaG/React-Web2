import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Content3 from './Content/Content3';
import Content2 from './Content/Content2';
import Content from './Content/Content';
import Footer from './Component/Footer/Footer';


class App extends Component {

  render(){
  return (
     <div className="App">
 
        <Toolbar></Toolbar>
        <div style={{width:'100%', height:'50px'}}></div>
        <Content></Content>
        {/* <Content3></Content3> */}
        <Content2></Content2> 
               
        <Footer></Footer>
      </div>
        
 
  );
}
}
export default App;
