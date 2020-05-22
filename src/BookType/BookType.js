import React from 'react';
import './BookType.css';

class BookType extends React.Component{
    render() {
        return (
            <div className="bookType">
                <label htmlFor="filter_options">Book Type: </label>
                <select id="filter_options" onChange={e => this.props.updateBookType(e.target.value)} name="filter_options" >
                    <option value={null} >No Filter</option>
                    <option value="ebooks">Ebook</option>
                </select>
            </div>
        )
    }
}

export default BookType;