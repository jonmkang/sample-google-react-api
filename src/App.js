import React from 'react';

import './App.css';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchTerm: "",
      bookType: 'No Filter',
      books: [],
      printType: 'All',
      inSearch: 'false'
    }
  }

  updateQuery(query){
    this.setState({
      searchTerm: query
    })
  }

  updateBookType(option){
    console.log('book type has changed to', option)
    this.setState({
      bookType: option
    })
  }

  updatePrintType(option){
    console.log('Print type has changed to', option)
    this.setState({
      printType: option
    })
  }

  updateBooks(books, state) {
    this.setState({
      books: [books],
      inSearch: state
    })
  }

  updateInSearch(state){
    this.setState({
      inSearch: state
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Google Book Search
        </header>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          updateQuery={query => this.updateQuery(query)} 
          bookType={this.state.bookType}
          updateBookType={option => this.updateBookType(option)}
          printType={this.state.printType}
          updatePrintType={option => this.updatePrintType(option)}
          inSearch={this.state.inSearch}
          updateInSearch={state => this.updateInSearch(state)}
          books={this.state.books}
          updateBooks={(books, state)=> this.updateBooks(books, state)}
          />

        <BookList 
          books={this.state.books} 
          printType={this.state.printType}
          bookType={this.state.bookType}
          inSearch={this.state.inSearch}
          />
      </div>
    );
  }
}

export default App;
