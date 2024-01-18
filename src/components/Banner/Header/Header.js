import React from 'react';

import './Header.scss';


const Header = () => {
    return (
        <header>
            <div className='header_inner'>
                <h1 className='header_logo'>
                    Front-end Developer
                </h1>

                <nav className='header_nav'>
                    <ul className='header_gnb'>
                        <li className='header_on'>
                            <a href='#home' title='첫 번째(HOME) 페이지로 이동하기'>HOME</a>
                        </li>

                        <li >
                            <a href='#about' title='두 번째(ABOUT) 페이지로 이동하기'>ABOUT</a>
                        </li>

                        <li>
                            <a href='#skill' title='세 번째(SKILL) 페이지로 이동하기'>SKILL</a>
                        </li>

                        <li>
                            <a href='#portfolio' title='네 번째(PORTFOLIO) 페이지로 이동하기'>PORTFOLIO</a>
                        </li>

                        <li>
                            <a href='#contact' title='다섯 번째(CONTACT) 페이지로 이동하기'>CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;