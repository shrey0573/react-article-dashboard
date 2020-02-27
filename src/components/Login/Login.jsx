import React, {Component} from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {MdHttps, MdAccountCircle} from 'react-icons/md';
import Navigate from "../../Nav";
import fire from '../../config/Firebase';
import "../../index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  
    this.state = {
       email: '',
       password: '',
    }
  }

  login(event) {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
      console.log(error);
      alert("Wrong Id/Password");
    });
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

    render(){
      return (
        <div>
          <Navigate />
          <h1 style={{marginTop: 30}}>Login to your Account</h1>
        <Container className="masthead">
          <Form className= "login-form">
            <Form.Group as={Row} controldId="emailid">
              <Form.Label id="login-label">
                <MdAccountCircle size={25}/>
              </Form.Label>
              <Col>
                <Form.Control id="field" value={this.state.email} onChange={this.handleEmail} type="email" placeholder="Enter your Email-Id" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controldId="password">
              <Form.Label id="login-label">
                <MdHttps size={25}/>
              </Form.Label>
              <Col>
                <Form.Control id="field" value={this.state.password} onChange={this.handlePassword} type="password" placeholder="Enter your password" />
              </Col>
            </Form.Group>
            <Button onClick={this.login} variant="success" type="submit" style={{marginTop: 10}}>
              Log-In
            </Button>
          </Form>
          </Container>
          </div>
      );
    }
};

export default Login;
