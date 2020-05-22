import React from 'react';
import BookItem from '../BookItem/BookItem';

class BookList extends React.Component{
    
    render(){
        let bookList = <div />
        if(this.props.inSearch==='true' && this.props.books.length){
            console.log(this.props.books[0].items)
            bookList = this.props.books[0].items.map((book, idx) => <BookItem key={book + " " + idx} book={book}/>)
        }
        return (
            <div className="bookList">
                {bookList}
            </div>
        )
    }
}

export default BookList;