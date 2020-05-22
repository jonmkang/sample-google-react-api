import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    console.log(queryItems.join('&'));
    return queryItems.join('&');
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log('component mounted')
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }; 
    
    let params ={
      q: this.props.searchTerm,
      key: "AIzaSyDRH0DlxcT148A-aOPmss6OEyiMDgTOuzE"
    }


    
    if(this.props.bookType === "ebooks"){
      params["filter"] = this.props.bookType;
    }

    if(this.props.printType === "books"){
      params["printType"] = this.props.printType;
    }

    if(this.props.printType === "magazines"){
      params["printType"] = this.props.printType;
    }

    const fetchUrl = url + this.formatQueryParams(params);

    fetch(fetchUrl, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.props.updateBooks(data, 'true')
      })
      .then(this.props.updateInSearch('false'))
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

      
  }

  render() {
    return (
      <form className="SearchBox" onSubmit={e => this.handleSubmit(e)}>
        {"Search Book: "}
        <input placeholder="Search term" value={this.props.searchTerm} onChange={e => this.props.updateQuery(e.target.value)}/>
        <button type="submit">Search</button>
      </form>   
    );
  }
}

export default SearchBox;