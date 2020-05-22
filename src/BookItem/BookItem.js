import React from 'react';
import './BookItem.css'

class BookItem extends React.Component{
    
    render() {
        const forSale = (this.props.book.saleInfo.saleability === "NOT_FOR_SALE") ? "Not for sale": "For sale: " + this.props.book.saleInfo.listPrice.amount
        const img = (this.props.book.volumeInfo.hasOwnProperty("imageLinks") ) ? <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title} maxheight="300px"/> : <img src="http://archive.thebreman.org/grabimg.php?wm=1&kv=13844" alt={this.props.book.volumeInfo.title} />


        console.log(this.props)
        return(
            <div className="bookItem">
                <h3>{this.props.book.volumeInfo.title}</h3>
                <div className="bookDetails">
                    {img}
                    <p className="bookInfo">
                        Author: {this.props.book.volumeInfo.authors} 
                        <br />
                        {forSale}   
                        <br />   
                        {this.props.book.volumeInfo.description}       
                    </p>
                </div>  
                
            </div>
        )
    }
}

export default BookItem;