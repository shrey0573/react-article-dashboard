import React, { Component } from "react";
import WriterForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import Navigate from "./Nav";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true
    };
  }
  componentDidMount() {
    const url="https://jsonplaceholder.typicode.com/todos/";
    fetch(url,
    {
        header: {
            'Content-type' : 'application/json',
            // 'Authorization' : 'EDsGm5WVRSCL4rtYrdwJRX8J',
        },
        // mode: 'no-cors'
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({articles: data});
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
      <div>
        <Navigate user={this.props.user} />
        <Container>
          <Row className="show-grid">
            <Col md={6}>
              <ArticleList articles={this.state.articles} />
            </Col>
            <Col md={6}>
              <WriterForm user={this.props.user} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
