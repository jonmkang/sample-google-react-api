import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends React.Component{
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar__controls">
                    <SearchBox 
                        searchTerm={this.props.searchTerm}
                        updateQuery={query => this.props.updateQuery(query)}
                        inSearch={this.props.inSearch}
                        updateInSearch={state => this.props.updateInSearch(state)}
                        books={this.props.books}
                        updateBooks={(books, state)=> this.props.updateBooks(books, state)}
                        bookType={this.props.bookType}
                        printType={this.props.printType}
                        />
                    <FilterOptions 
                        bookType={this.props.bookType}
                        updateBookType={option => this.props.updateBookType(option)} 
                        printType={this.props.printType}
                        updatePrintType={option => this.props.updatePrintType(option)} />
                </div>
            </div>
        )
    }
}

export default SearchBar;