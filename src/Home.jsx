import React, { Component } from "react";
import WriterForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import Navigate from "./Nav";
import axios from 'axios';
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
    axios.get('https://api.onecricket.app/admin/news/1',{
      headers : {
        'Authorization' : 'EDsGm5WVRSCL4rtYrdwJRX8J',
        'Content-type' : 'application/x-www-form-urlencoded',
      }
    }
    )
      .then(res => {
        this.setState({ articles : res.data });
      })
  }

  render() {
    return (
      <div>
        <Navigate user={this.props.user} />
        <Container>
          <Row className="show-grid">
            <Col md={7}>
              <ArticleList articles={this.state.articles} />
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
