import React, { Component } from 'react'
import ArticleListItem from './ArticleListItem'
// import axios from 'axios';

class ArticleList extends Component {
    render() {
        const{articles} = this.props;
        return (
            <div className="articles-list">
                <h1 style={{ marginTop: 30, textAlign: "left" }}><strong>News List</strong></h1>
                {articles.map( article => (
                    <ArticleListItem key={article.id} article={article}/>
                ))}                
            </div>
        )
    }
}
export default ArticleList;
