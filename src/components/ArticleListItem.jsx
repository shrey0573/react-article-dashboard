import React, { Component } from "react";
import { Card, Row, Button} from "react-bootstrap";

class ArticleListItem extends Component {
  render() {
    const{article} = this.props;
    return (
      <div>
        <Row className="show-grid">
            
          <Card style={{ width: "40rem", marginTop: 50, textAlign: 'left'}}>
            <Card.Body>
              <img style={{float:'left', marginRight: 10, borderRadius: 3}} src="https://www.crictracker.com/wp-content/uploads/2020/02/Heather-Knight.jpg" alt="" width="150" />
              <Card.Title><strong>{article.title}</strong></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {article.id}
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button style={{margin : 5, float: 'right'}} variant="danger" onClick={this.handleDeleteArticle}> Delete</Button >
              <Button style={{margin : 5, float: 'right'}} variant="primary" onClick={this.handleUpdateArticle}>Update </Button >
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
export default ArticleListItem;
