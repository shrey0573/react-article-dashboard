import React, { Component } from "react";
import WriterForm from "./components/Articles/ArticleForm";
import ArticleList from "./components/Articles/ArticleList";
import Navigate from "./Nav";
import { Container, Row, Col, Button } from "react-bootstrap";

class Home extends Component {
constructor(props) {
  super(props)

  this.state = {
     selectedItem: null,
     isOpen: false
  }
  this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
}
handleEditNews = newstoUpdate => () => {
  this.setState({
    selectedItem: newstoUpdate,
    isOpen: true
  })
}
handleFormOpen = () => {
  this.setState({
    isOpen: true
  })
}
handleFormCancel = () => {
  this.setState({
    isOpen: false
  })
}


  render() {
    return (
      <div>
        <Navigate user={this.props.user} />
        <Container>
          <Row className="show-grid">
            <Col md={7}>
              <ArticleList />
            </Col>
            <Col md={5}>
            {/* <Button as={Row} column md={1}
            onClick={this.handleFormOpen}>Create News</Button> */}
              <WriterForm user={this.props.user} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
