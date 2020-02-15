import React, { Component } from "react";
import { Card, Row, Button} from "react-bootstrap";

class ArticleListItem extends Component {
  render() {
    const{article} = this.props;
    return (
      <div>
        <Row className="show-grid">
            
          <Card style={{ width: "40rem", marginTop: 50}} MdFormatAlignLeft>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {article.id}
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{margin : 5}} variant="primary" onClick={this.handleUpdateArticle}>Update </Button >
              <Button style={{margin : 5}} variant="danger" onClick={this.handleDeleteArticle}> Delete</Button >
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
export default ArticleListItem;
