import React from 'react';

class SearchBar extends React.Component {

    render () {
        const { searchText, onTextChange, onClearClick } = this.props;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" onChange={onTextChange} className="form-control form-control-lg" placeholder="Search People" value={searchText} />
                    </div>
                    <div className="col-md-2">
                        <button onClick={onClearClick} className="btn btn-dark btn-lg w-100">Clear</button>
                    </div>
                </div> 
            </div>
        );
    }
};

export default SearchBar;