import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3.py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        /* <div>
             {/!*<h1 style={{color :'red'}}>{branding}</h1>*!/}
             <h1>{branding}</h1>
         </div>*/
    );
};
//setting default prop
Header.defaultProps = {
    branding: 'My App'
};

//on failing the validation it will throw a warning
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

//add type checking
const headingStyle = {
    color: 'blue'
};


export default Header;



