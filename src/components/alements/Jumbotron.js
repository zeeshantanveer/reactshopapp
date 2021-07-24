import React from 'react';
const Jumbotron = (props) => {
    const {icon, page, search, onInputChange, searchField, onSearchClick} = props;
    return (
        <div className="jumbotron py-5">
            <h1 className="display-1">
                <i className="material-icons brand-icon my-3">{icon}</i> {page}
            </h1>
            {
                searchField ? (
                    <div className="input-group w-50 mx-auto">
                        <input type="text"
                               className="form-control"
                               placeholder="Search Your Recipe"
                               value={search}
                               onChange={onInputChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-success" onClick={onSearchClick}>Search Recipe</button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Jumbotron;
