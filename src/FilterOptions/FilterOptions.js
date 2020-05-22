import React, { Component } from 'react';
import './FilterOptions.css';
import BookType from '../BookType/BookType';
import PrintType from '../PrintType/PrintType';

class FilterOptions extends Component {
  render() {
    // const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <PrintType 
            printType={this.props.printType}
            updatePrintType={option => this.props.updatePrintType(option)}
            />
          <BookType 
            bookType={this.props.bookType}
            updateBookType={option => this.props.updateBookType(option)} 
            />
          
        </div>
      </div>
    );
  }
}

export default FilterOptions;

// selected={filterOption ==="No Filter"}