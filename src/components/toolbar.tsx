import React from 'react';

const Toolbar = () => (
    <div className="c-toolbar">
        <h3 className="c-toolbar__title has-divider">Home Page</h3>
        <h5 className="c-toolbar__meta">
            info
    </h5>
        <div className="c-field has-icon-right c-navbar__search u-ml-auto u-hidden@mobile">
            <span className="c-field__icon">
                <i className="fa fa-search"></i>
            </span>
            <label className="u-hidden-visually" htmlFor="navbar-search">Seach</label>
            <input className="c-input" id="navbar-search" type="text" placeholder="Search"></input>
        </div>
    </div>
)

export default Toolbar;