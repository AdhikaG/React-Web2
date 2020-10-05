import React from 'react';
import logo2 from './logo2.png';
import './Toolbar.css';

 const Toolbar = () => {

    console.log(logo2);

    return (
        <header className="toolbar-header">        
          
          <nav className="toolbar-nav">
            
            
            <div className="toolbar-logo"><img src={logo2} alt="toolbar-logo"></img> </div>
            <div className="spacer"></div>
            <div className="toolbar-option" >

                <ul>
                     <li className="Option"><a href="/">Stocks</a></li>
                     <li className="Option"><a href="/">Investing </a></li>
                     {/* <li className="Option"><a href="/">Pro Tools </a></li>
                     <li className="Option"><a href="/">Block </a></li> */}
                     <li className="Option"><a href="/">Help </a></li>
                     {/* <li className="Option"><a href="/">Login </a></li> */}
                     <li className="Option"><a href="/">Sign Up </a></li>
  
                 </ul>
            </div>

            </nav>
        <hr></hr>
        </header>
        
    )
}

export default Toolbar;