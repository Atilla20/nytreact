import React, {Component } from "react";
import Form from "./Form";
import Searched from "./Searched";
import Results from "./Results";
import API from "../utils/api";

class Main extends Component {

    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        searched: []
    };


//when page loads it should show articles

componentDidMount() {
    this.getSearchedArticles()
}

//method that gets searched  articles from db
getSearchedArticles = () => {
    API.getArticle()
        .then((res) => {
            this.setState({ searched: res.data});
        });
}

//renders a search results div for each article

renderArticles = () => {
    return this.state.articles.map(article => (
        <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleButton= {this.handleButton}
        getSearchedArticles={this.getSearchedArticles}
        />
    ));
}

// renders one div for each searched article
renderSearched = () => {
    return this.state.searched.map( search => (
        <Searched
        _id={search._id}
        key={search._id}
        title={search.title}
        date={search.date}
        url={search.url}
        getSearchedArticles = {this.getSearchedArticles}
        />
    ));
}

//keeps track of user input

handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
    
}

handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value});
}

handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value})
}

//This handles the search form

handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
        .then((res) => {
            this.setState({ articles: res.data.response.docs });
        });
}

//When button is -clicked- adds article to db

handleSearchButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    const newSave = {title: findArticleById.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
    API.searchArticle(newSearch)
    .then(this.getSearchedArticles());
}

render() {
    return (
        <div className="main-container">
            <div classname="container">
             <div className="jumbotron">
                <h1 className = "text-center"> New York Times Article Search</h1>
                <h2> className ="text-center"> Search for and save articles of interest.</h2>
        </div>

        //Search form
        <Search
            handleTopicChange={this.handleTopicChange}
            handleStartYearChange= {this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}
        />

        //Searched articles
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"> Searched Articles</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {this.renderSearched()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

    );
}
}

export default Main;



