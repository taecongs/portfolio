import { useState } from 'react';

import './Sidebar.scss';


const Sidebar = () => {
    const $root = document.getElementById('root');
    // console.log($root);

    const [isNav, setIsNav] = useState(true);

    const hambugerBtn = () => {
        setIsNav(isNav => !isNav);

        if ( isNav ){
            $root.classList.add('open');
            $root.classList.remove('close');
        } else{
            $root.classList.remove('open');
            $root.classList.add('close');
        }
    }

    return (
        <aside>
            {/* 사이드바 정의 */}
            <div className="left_nav" style={{ opacity: '1' }}>
                {/* <span className="ir_su">왼쪽 네비게이션 부분</span> */}
                <nav>
                    <h2 className="nav_logo">
                        B {/* <sup>©</sup> */}
                    </h2>
                    <div className="nav_text">
                        <p>010-8127-9927</p>
                    </div>
                </nav>
            </div>

            {/* 햄버거 메뉴 */}
            <div className="icon_wrap" style={{ opacity: '1' }}>
                <div className={isNav ? 'icon' : 'icon iconAnimation'} onClick={hambugerBtn}></div>
            </div>

            <div className='overlay'>
                <ul className="menu">
                    <li>
                        <a href='#home' alt='첫 번째(HOME) 페이지로 이동하기' title='첫 번째(HOME) 페이지로 이동하기'>Home</a><br/>
                        <a href='#about' alt='두 번째(ABOUT) 페이지로 이동하기' title='두 번째(ABOUT) 페이지로 이동하기'>About</a><br/>
                        <a href='#skill' alt='세 번째(SKILL) 페이지로 이동하기' title='세 번째(SKILL) 페이지로 이동하기'>Skill</a><br/>
                        <a href='#portfolio' alt='네 번째(PORTFOLIO) 페이지로 이동하기' title='네 번째(PORTFOLIO) 페이지로 이동하기'>Portfolio</a><br/>
                        <a href='#contact' alt='다섯 번째(CONTACT) 페이지로 이동하기' title='다섯 번째(CONTACT) 페이지로 이동하기'>Contact</a>
                    </li>
                </ul>
            </div>

            <nav className="m_navi">
                <h2 className="m_nav-logo">
                    B
                </h2>
            </nav>
        </aside>
    );
}

export default Sidebar;