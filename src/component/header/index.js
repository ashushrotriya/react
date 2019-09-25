import React from 'react';
import './index.css'
import SiteName from "./sitename";
import MainMenu from "./menu";

class Header extends React.Component {
    render() {
        return (
            <div>
                <SiteName/>
                <MainMenu/>
                <div className='app'>this is header</div>
            </div>)
    }
}

export default Header;
