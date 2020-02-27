import React, { Component } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
// import Navignpate from "../Nav";
import "../../index.css";
import cuid from 'cuid';
// import fire from "../config/Firebase";

class WriterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: "",
      contentURL: "",
      title: "",
      contentCredits: "",
      imageCredit: "",
      createUserId: ""
    };
  }

  handleImageURL = event => {
    this.setState({
      imageURL: event.target.value
    });
  };
  handleContentURL = event => {
    this.setState({
      contentURL: event.target.value
    });
  };
  handleTitle = event => {
    this.setState({
      title: event.target.value
    });
  };
  handlecontentCredits = event => {
    this.setState({
      contentCredits: event.target.value
    });
  };
  handleImageCredits = event => {
    this.setState({
      imageCredit: event.target.value
    });
  };
  handlecreateUserId = event => {
    this.setState({
      createUserId: event.target.value
    });
  };
  handleSubmit(event) {
    try {
      event.preventDefault();
      const url="/admin/news/";
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "EDsGm5WVRSCL4rtYrdwJRX8J"
        },
        // mode: "no-cors",
        body: JSON.stringify({
          imageUrl: `${this.state.imageURL}`,
          contentUrl: `${this.state.contentURL}`,
          title: `${this.state.title}`,
          contentCredits: `${this.state.contentCredits}`,
          imageCredit: `${this.state.imageCredit}`,
          createUserId: `${this.props.user.uid}`,
          newsId: `${cuid()}` 
        }),
        redirect: "follow"
      })
        .then(response => response.text())
        .then(result => {console.log(result, "Submitted successfully");
        window.location.reload()});
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    return (
      <div className="formlogin">
        {/* <Button className="logoutbtn" variant="danger" onClick={this.logout} style={{borderRadius: 20, width: 85 }}>Logout</Button> */}
        <h1
          style={{ fontFamily: "Montserrat", marginTop: 30, textAlign: "center" }}
        >
          Create <strong>News</strong> Here
        </h1>
        <Container>
          <Form
            style={{ marginLeft: 10, marginTop: 40 }}
            onSubmit={this.handleSubmit.bind(this)}
          >
            <Form.Group as={Row}>
              <Form.Label id="formlabel" column md={2}>
                <strong>Title</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitle.bind(this)}
                  placeholder="Type the Title of Article"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={2}>
                <strong>Image URL</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  value={this.state.imageURL}
                  onChange={this.handleImageURL.bind(this)}
                  placeholder="Enter the Image URL"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={2}>
                <strong>Article Link</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  value={this.state.contentURL}
                  onChange={this.handleContentURL.bind(this)}
                  placeholder="Enter the content of article"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={2}>
                <strong>Content Credits</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  value={this.state.contentCredits}
                  onChange={this.handlecontentCredits.bind(this)}
                  placeholder="Give here the content credits"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={2}>
                <strong>Image Credits</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  type="text"
                  value={this.state.imageCredit}
                  onChange={this.handleImageCredits.bind(this)}
                  placeholder="Give here the image credits"
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default WriterForm;
