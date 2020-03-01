import React, { Component } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { MdCancel, MdEdit } from "react-icons/md";
import '../../index.css'

class ArticleListItem extends Component {
  handleDeleteArticle = newsId => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "EDsGm5WVRSCL4rtYrdwJRX8J");

    var raw = JSON.stringify({ newsId: newsId });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/admin/news", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result, "deleted");
        window.location.reload();
      })
      .catch(error => console.log("error", error));
  };

  render() {
    const { article } = this.props;
    return (
      <div>
        <Row className="show-grid">
          <Card className="card-item"
            style={{
              width: "40rem",
              marginTop: 50,
              textAlign: "left",
              padding: -10
            }}
          >
            <Card.Body>
              <img
                style={{ float: "left", marginRight: 10, borderRadius: 3 }}
                src={article.imageUrl}
                alt=""
                width="150"
              />
              <Card.Title>
                <strong>{article.title}</strong>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {article.contentCredits}
              </Card.Subtitle>
              <Card.Text>{/* {article.contentUrl} */}</Card.Text>
              <Button
                style={{
                  marginTop: 5,
                  float: "right",
                  background: "transparent",
                  color: "red",
                  border: "none"
                }}
                onClick={e => {
                  if (window.confirm("Are you sure to delete this news?"))
                    this.handleDeleteArticle(article.newsId);
                }}
              >
                {" "}
                <MdCancel size={20} />{" "}
              </Button>
              <Button
                style={{
                  margin: 5,
                  float: "right",
                  background: "transparent",
                  color: "green",
                  border: "none"
                }}
                onClick={this.handleUpdateArticle}
              >
                <MdEdit size={20} />{" "}
              </Button>
            </Card.Body>
          </Card>
          {/* <h1>Test</h1> */}
        </Row>
      </div>
    );
  }
}
export default ArticleListItem;
