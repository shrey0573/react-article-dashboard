import React, { Component } from 'react'
import ArticleListItem from './ArticleListItem'
import axios from 'axios';

class ArticleList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          articles: [],
        };
      }
      componentDidMount() {
        axios.get('/admin/news/1',{
          headers : {
             'Authorization' : 'EDsGm5WVRSCL4rtYrdwJRX8J',
            'Content-type' : 'application/x-www-form-urlencoded',
            // 'Target-Endpoint' : '',
          }
        }
        )
          .then(res => {
            this.setState({ articles : res.data });
          })
      }
    render() {
        return (
            <div className="articles-list">
                <h1 style={{ marginTop: 30, textAlign: "left" }}><strong>News List</strong></h1>
                {this.state.articles.map( article => (
                    <ArticleListItem key={article.id} article={article}/>
                ))}                
            </div>
        )
    }
}
export default ArticleList;
