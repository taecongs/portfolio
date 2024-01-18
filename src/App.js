import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


import Sidebar from './components/Banner/Sidebar/Sidebar';
import Header from './components/Banner/Header/Header';
import TopButton from './components/TopButton/TopButton';

import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;


const App = () => {
    const onLeave = (origin, destination, direction) => {

        let $header = document.querySelectorAll('header');
        let $logo = document.querySelectorAll('.header_inner h1');
        let $li = document.querySelectorAll('.header_gnb li');
        let $nav = document.querySelectorAll('.header_gnb li a');

        // 배경 검정색 => dot:#fff | 배경 밝은색 => dot : #000
        let $dot = document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span');
        // let $top = document.querySelector('#top_btn');

        if (destination.anchor === 'home') {
            // top 버튼            
            // $top.style.display = 'none';

            $header[0].classList.remove('header_bg');

            // 로고 관련
            $logo[0].classList.remove('logo_black');
            $logo[0].className = 'header_logo';

            $nav.forEach(($nav_a) => { $nav_a.style.color = "#fff"; });
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#fff"; });
            // $dot.forEach(($nav_a) => { $nav_a.style.display = "block"; });
            $li[0].className = 'header_on0';


            // 텍스트 색상 (1 페이지는 #000 -> #fff)
            $li[1].classList.remove('header_on1');
            $li[2].classList.remove('header_on2');
            $li[3].classList.remove('header_on3');
            $li[4].classList.remove('header_on4');


            // 텍스트 밑 라인
            $li[1].classList.remove('header_line');
            $li[2].classList.remove('header_line');
            $li[3].classList.remove('header_line');
            $li[4].classList.remove('header_line');



        } else if (destination.anchor === 'about') {
            // top 버튼            
            // $top.style.display = 'block';

            $header[0].className = 'header_bg';

            // 로고
            $logo[0].classList.remove('header_logo');
            $logo[0].classList.remove('logo_white');
            $logo[0].className = 'logo_black';

            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000"; });
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000"; });
            // $dot.forEach(($nav_a) => { $nav_a.style.display = "block"; });

            // 텍스트 색상 (2 페이지는 #fff -> #000)
            $li[0].classList.remove('header_on0');
            $li[2].classList.remove('header_on2');
            $li[3].classList.remove('header_on3');
            $li[4].classList.remove('header_on4');

            // 텍스트 밑 라인
            $li[0].className = 'header_line';
            $li[2].className = 'header_line';
            $li[3].className = 'header_line';
            $li[4].className = 'header_line';

            // 현재 페이지에서 밑 라인 호버
            $li[1].className = 'header_on1';


        } else if (destination.anchor === 'skill') {
            // top 버튼            
            // $top.style.display = 'block';

            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000"; });
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000"; });
            // $dot.forEach(($nav_a) => { $nav_a.style.display = "block"; });

            // 로고
            $logo[0].classList.remove('header_logo');
            $logo[0].classList.remove('logo_white');
            $logo[0].className = 'logo_black';

            // 텍스트 색상 (2 페이지는 #fff -> #000)
            $li[0].classList.remove('header_on0');
            $li[1].classList.remove('header_on1');
            $li[3].classList.remove('header_on3');
            $li[4].classList.remove('header_on4');

            // 텍스트 밑 라인
            $li[0].className = 'header_line';
            $li[1].className = 'header_line';
            $li[3].className = 'header_line';
            $li[4].className = 'header_line';

            // 현재 페이지에서 밑 라인 호버
            $li[2].className = 'header_on2';


        } else if (destination.anchor === 'portfolio') {
            // top 버튼
            // $top.style.display = 'block';

            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000"; });
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000"; });
            // $dot.forEach(($nav_a) => { $nav_a.style.display = "block"; });

            // 로고
            $logo[0].classList.remove('header_logo');
            $logo[0].classList.remove('logo_white');
            $logo[0].className = 'logo_black';

            // 텍스트 색상 (2 페이지는 #fff -> #000)
            $li[0].classList.remove('header_on0');
            $li[1].classList.remove('header_on1');
            $li[2].classList.remove('header_on2');
            $li[4].classList.remove('header_on4');

            // 텍스트 밑 라인
            $li[0].className = 'header_line';
            $li[1].className = 'header_line';
            $li[2].className = 'header_line';
            $li[4].className = 'header_line';

            // 현재 페이지에서 밑 라인 호버
            $li[3].className = 'header_on3';


        } else if (destination.anchor === 'contact') {
            // top 버튼
            // $top.style.display = 'block';

            $nav.forEach(($nav_a) => { $nav_a.style.color = "#000"; });
            $dot.forEach(($nav_a) => { $nav_a.style.background = "#000"; });
            // $dot.forEach(($nav_a) => { $nav_a.style.display = "block"; });

            // 로고
            $logo[0].classList.remove('header_logo');
            $logo[0].classList.remove('logo_white');
            $logo[0].className = 'logo_black';

            // 텍스트 색상 (5 페이지는 #fff -> #000)
            $li[0].classList.remove('header_on0');
            $li[1].classList.remove('header_on1');
            $li[2].classList.remove('header_on2');
            $li[3].classList.remove('header_on3');

            $li[0].className = 'header_line';
            $li[1].className = 'header_line';
            $li[2].className = 'header_line';
            $li[3].className = 'header_line';

            // 현재 페이지에서 밑 라인 호버
            $li[4].className = 'header_on4';
        }
    }
    return (

        <div>
            <div id="cover" className="cover_left"></div>
            <Sidebar />
            <Header />
            <TopButton />

            <ReactFullpage
                debug
                // licenseKey={"YOUR_KEY_HERE"}
                navigation
                anchors={["home", "about", "skill", "portfolio", 'contact']}
                sectionSelector={SECTION_SEL}
                onLeave={onLeave}
                // sectionsColor="blue"
                render={(comp) => (
                    <ReactFullpage.Wrapper>
                        <Banner />
                        <About />
                        <Skill />
                        <Portfolio />
                        <Contact />
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>

    );
}

export default App;