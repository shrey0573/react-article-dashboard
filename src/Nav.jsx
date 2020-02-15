import React from "react";
import logo from './images/logo.png'
import { Navbar, Nav, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import fire from './config/Firebase';


const Navigate = ({user})=> {
  
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img src={logo} alt={''} style={{width:30, marginTop: -7, borderRadius: 50, marginRight: 10}} />OneCricket</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {user!=null ? <Button variant="outline-light" onClick={() => {fire.auth().signOut()} }>Logout</Button> : ''}
        
      </Navbar>
    );
}
export default Navigate;