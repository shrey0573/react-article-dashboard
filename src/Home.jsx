import React, { Component } from "react";
import WriterForm from "./components/Articles/ArticleForm";
import ArticleList from "./components/Articles/ArticleList";
import Navigate from "./Nav";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {

  render() {
    return (
      <div>
        <Navigate user={this.props.user} />
        <Container>
          <Row className="show-grid">
            <Col md={7}>
              <ArticleList/>
            </Col>
            <Col md={5}>
              <WriterForm user={this.props.user} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
