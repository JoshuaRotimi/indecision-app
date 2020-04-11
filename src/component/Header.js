import React from "react";
import './styles/components/header.css'
const Header = (props) =>
     (
        <div className='header'>
            <div className='container'>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </div>
    );


Header.defaultProps = {
    title: 'Indecision'
};

export default Header;