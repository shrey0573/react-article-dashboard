import React, { Component } from 'react';
import {Form, Login, Button, Container} from 'react-bootstrap';

class PopupForm extends Component {
    render() {
        return (
            <div>
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
                  placeholder="Enter the link of article"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={{overflowY : "auto", overflowX : "hidden"}}>
              <Form.Label column md={2}>
                <strong>Article Content</strong>
              </Form.Label>
              <Col md={10}>
                <Form.Control
                  as="textarea"
                  rows="5"
                  type="text"
                  value={this.state.data}
                  onChange={this.handleInputData.bind(this)}
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
        )
    }
}
export default PopupForm;