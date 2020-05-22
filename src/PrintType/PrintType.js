import React from 'react';
import './PrintType.css';

class PrintType extends React.Component{
    render() {
        return (
            <div className="printType">
                <label htmlFor="filter_options">Print Type: </label>
                <select id="filter_options" onChange={e => this.props.updatePrintType(e.target.value)} name="filter_options" >
                    <option value="all" >All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </div>
        )
    }
}

export default PrintType;