
import './Portfolio.scss';
import './slick-theme.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import $mokup_01 from './img/mockup_01.png';
import $mokup_02 from './img/mockup_02.png';
import $mokup_03 from './img/mockup_03.png';
import $mokup_04 from './img/mockup_04.png';
import $mokup_05 from './img/mockup_05.png';
import $mokup_06 from './img/mockup_06.png';
import $mokup_07 from './img/mockup_07.png';
import $mokup_08 from './img/mockup_08.png';
import $mokup_09 from './img/mockup_09.png';
import $mokup_10 from './img/mockup_10.png';
import $mokup_11 from './img/mockup_11.png';


const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // 페이지 스크롤 애니메이션 정의
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const options2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const options3 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_slider_l');
            } else {
                entry.target.classList.remove('active_slider_l');
            }
        });
    }, options);

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_slider_r');
            } else {
                entry.target.classList.remove('active_slider_r');
            }
        });
    }, options2);

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('dot_animation');
            } else {
                entry.target.classList.remove('dot_animation');
            }
        });
    }, options3);

    const slider_l = document.querySelectorAll('.slider_left');
    const slider_r = document.querySelectorAll('.slider_right');
    const slider_dot = document.querySelectorAll('.slick-dots');

    slider_l.forEach(el => observer.observe(el));
    slider_r.forEach(el => observer2.observe(el));
    slider_dot.forEach(el => observer3.observe(el));


    return (
        <section className='custom-section portfolio_container'>
            <div className='bg_box'>

                <div className='portfolioContant_inner'>

                    <Slider {...settings} className='s_s'>
                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>01 - 개인 프로젝트</p>

                                <h1 className='slider_title'>포켓몬 가이드북</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>React</p>
                                    <p className='tec_4'>Node.js</p>
                                    <p className='tec_5'>MYSQL</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                    포켓몬 등록 & 포켓몬 진화 등록 기능, 등록한 포켓몬 정보 수정 기능, 데이터베이스에 저장된 포켓몬 목록 구현, 등록되어 있는 포켓몬 검색 기능 구현 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    포켓몬 가이드북은 어린 시절의 추억을 회상하고자 만들어진 프로젝트로, 포켓몬을 등록하고 수정할 수 있으며, 등록된 포켓몬을 검색하거나 도감 형태로 볼 수 있습니다.
                                </p>

                                <div className='slder_link'>
                                    {/*  
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/59dfa8443a1d46fdb2f210c0d05613c0?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/guidebook' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_01} alt='mokup1' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>02 - Take5 ENT</p>

                                <h1 className='slider_title'>가평 배수펌프</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>Python</p>
                                    <p className='tec_4'>Django</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        접속 한 대시보드에 따라 자동 및 수동 모드 구현, 시설 제어 기능에 대한 탭 메뉴 구현 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    Take5 ENT와 가평군이 협업하여 진행 중인 배수펌프 3D 통합 모니터링 프로젝트에 참여하였으며, 이 프로젝트는 보다 효율적인 관리 및 모니터링을 목표로 하고 있습니다.
                                    <span className="security-notice">※ 보안상의 이유로 깃헙 주소를 공개하지 못하는 점 양해해주시면 감사하겠습니다.</span>
                                </p>

                                <div className='slder_link'>
                                    {/* 
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/Take5-ENT-3D-92bbe07d6eef460bb8e0d00ee20239da?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    {/* 
                                    <div className='git_box'>
                                        <a href='https://github.com/tmr-mohaji/mohaji' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>
                                    */}
                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_02} alt='mokup2' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>03 - Take5 ENT</p>

                                <h1 className='slider_title'>LinkedFires</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>Python</p>
                                    <p className='tec_4'>Django</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        데이터베이스에 저장된 장비/시설물 및 POI/시설물 목록 구현,  3D 도면의 층 이동을 위한 버튼 구현, 서브메뉴(푸터) 이벤트 관련 등의 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                        Take5 ENT에서 서비스 중인 프로메테우스 홈페이지를 리뉴얼하여 디지털 트윈 3D 모니터링을 포함 한 LinkedFires 데모 버전 홈페이지를 개발하는 업무를 진행하였습니다.
                                    <span className="security-notice">※ 보안상의 이유로 깃헙 주소를 공개하지 못하는 점 양해해주시면 감사하겠습니다.</span>
                                </p>

                                <div className='slder_link'>
                                    {/*
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                     */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/Take5-ENT-LinkedFires-e720b457561840f3883301b1cd6eed41?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    {/* 
                                    <div className='git_box'>
                                        <a href='https://github.com/tmr-mohaji/mohaji' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>
                                    */}
                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_03} alt='mokup3' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>04 - Take5 ENT</p>

                                <h1 className='slider_title'>Hyundai</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>Python</p>
                                    <p className='tec_4'>Django</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                    데이터베이스에 저장된 빌딩·층 목록 구현, 새로운 알람 생성 및 생성한 알람 목록 게시판 형태로 구현, 생성된 알람의 기간 별 필터링 기능 및 차트 구현, mqtt를 이용해 생성된 알람 카운트 및 알람 발생 메시지 실시간 업데이트 기능 구현 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    Take5 ENT에서 기존에 진행했던 Hyundai 프로젝트를 커스터마이징하여, 기술 및 문제 해결 능력의 향상을 목표로 업무를 진행하였습니다.
                                    <span className="security-notice">※ 보안상의 이유로 깃헙 주소를 공개하지 못하는 점 양해해주시면 감사하겠습니다.</span>
                                </p>

                                <div className='slder_link'>
                                    {/*
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/Take5-ENT-Hyundai-9d937f35675e43cd92814639a21d47b7?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    {/*
                                    <div className='git_box'>
                                        <a href='https://github.com/tmr-mohaji/mohaji' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_04} alt='mokup4' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>05 - 팀프로젝트</p>

                                <h1 className='slider_title'>내일 뭐하지?</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>React</p>
                                    <p className='tec_4'>Node.js</p>
                                    <p className='tec_5'>Sass</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        메인 페이지, 이벤트 상세 조회 페이지, 별점&댓글 기능 페이지, 마이 페이지(즐겨 찾기,댓글 관리), 채팅 페이지 레이아웃 구상 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    코로나 완화로 정상적인 일상으로 돌아오며 축제나, 전시회 등을 찾는 사람들이 증가하고 있지만 일정을 한번에 모아서 보기는 쉽지 않습니다.
                                    이러한 부분을 고려하여 서울 전 지역에서 진행되고 있는 전시회 및 축제 등의 이벤트 일정을 제공하는 서비스입니다.
                                </p>

                                <div className='slder_link'>
                                    {/*
                                    <div className='site_box'>
                                        <a href='http://seryeong.cloud:3000/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/36665d27d037486895b26220a1fbbbe6?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/SeSAC4-mohaji' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_05} alt='mokup5' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>06 - 개인 프로젝트</p>

                                <h1 className='slider_title'>유튜브 클론 코딩</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_2'>JavaScript</p>
                                    <p className='tec_3'>React</p>
                                    <p className='tec_5'>Sass</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        유튜브 API를 활용하여 데이터 연결후 메인 화면에 인기 있는 한국 지역 영상 리스트 제공 할 수 있도록 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    React, Sass를 이용하여 현재 서비스 중인 유튜브의 클론 코딩 작업물이며, 제공 된 동영상 썸네일을 클릭하면 동영상을 볼 수 있는
                                    컴포넌트로 연결되어 영상 시청이 가능하고 구독자수,조회수, 등록시간, 좋아요, 싫어요 등 실시간으로 데이터 확인이 가능합니다.
                                </p>

                                <div className='slder_link'>
                                    {/*
                                    <div className='site_box'>
                                        <a href='http://27.96.130.163:8081/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/792e87e117074d1cbe0540369a9f827a?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/youtube_clone' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_06} alt='mokup6' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>07 - 팀 프로젝트</p>

                                <h1 className='slider_title'>룩포웨더</h1>

                                <div className='slider_tec'>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        메인 페이지, 서브 페이지, 회원 가입, 로그인, 아이디 찾기, 비밀번호 찾기, 회원 정보 수정 등 전체적인 레이아웃 구상 및 프론트엔드 작업
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                룩포웨더는 해당 지역의 API를 통하여 날씨를 확인하면서 그 날에 맞는 옷차림까지 추천 받을 수 있는 서비스입니다. 사용자들의 다양한 코디를 업로드 하여 다른 사람들과의 소통을 할 수 있는 커뮤니티 기능도 제공합니다.
                                </p>

                                <div className='slder_link'>
                                    {/*  
                                    <div className='site_box'>
                                        <a href='https://hamayj.today:8080/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>
                                    */}

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/Look-For-Weather-265fef8dec5b4462ba9360bf570ba1eb?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'> 
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='git_box'>
                                        <a href='https://github.com/taecongs/SeSAC4-LookForWeather' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                            <span className='git_text'>깃헙 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_07} alt='mokup7' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>08 - 통컴퍼니</p>

                                <h1 className='slider_title'>평일</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                중전기 종합 제조회사로 관수사업, 민수사업, 해외사업을 하고 있습니다. 
                                신뢰감을 주는 블루 계열의 컬러와 큰 이미지를 활용하여 단순하고 직관적인 레이아웃으로 
                                필요한 정보와 특징을 효과적으로 전달하고자 했습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://pyungil.com/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/32e72417161a43b0a3c27f8e354fb995?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'
>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_08} alt='mokup8' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>09 - 통컴퍼니</p>

                                <h1 className='slider_title'>픽셀로</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                다양한 디지털 융합 기술을 이용한 제품을 개발 및 판매하고 있습니다.
                                원페이지 형태로 상단에는 주요 제품들을 나열하였으며, 로고 색상인 퍼플 계열들을 메인 컬러로 사용해 심플하고 깔끔한 컨셉으로 작업을 진행하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='https://pixelro.com/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/c143d580e2ef45a69e77f8885851786e?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'
>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_09} alt='mokup9' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>10 - 통컴퍼니</p>

                                <h1 className='slider_title'>꿈이룸</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                어린이, 청소년, 그리고 초보 부모를 위한 심리 상담, 치료, 교육을 서비스를 제공합니다. 
                                파스텔톤 컬러로 부드럽고 편안한 분위기를 연출하였으며, 웹이용자를 위해 단순하고 
                                직관적인 레이아웃으로 필요한 정보에 빠르게 접근할 수 있도록 하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://dreams4you.co.kr/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/c8278e517f4d4691bf10c155997679ed?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'
>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_10} alt='mokup10' />
                                </div>
                            </div>
                        </div>

                        <div className='sider_box'>
                            <div className='slider_left'>
                                <p className='slider_sub'>11 - 통컴퍼니</p>

                                <h1 className='slider_title'>엔피코리아</h1>

                                <div className='slider_tec'>
                                    <p className='tec_0'>비개발</p>
                                    <p className='tec_0'>웹 퍼블리싱</p>
                                    <p className='tec_1'>HTML5</p>
                                    <p className='tec_6'>CSS3</p>
                                    <p className='tec_2'>JavaScript</p>
                                </div>

                                <div className='sider_my'>
                                    <p className='slider_my_t'>
                                        WordPress 플랫폼 기반 웹 퍼블리싱 및 유지보수, WordPress 테마, 플러그인 등 관리, 검색엔진 최적화 (SEO)
                                    </p>
                                </div>

                                <p className='slider_detail'>
                                    사용자가 편하게 정보를 찾고 이용할 수 있도록 검색 기능을 배치하여 
                                    제품명을 입력하면 해당 제품 페이지로 이동되며, 로고 색상인 블루 계열들을 
                                    메인 컬러로 사용하여 심플하고 깔끔한 컨셉으로 작업을 진행하였습니다.
                                </p>

                                <div className='slder_link'>
                                    <div className='site_box'>
                                        <a href='http://www.npkorea.co.kr/' target='_blank' rel='noopener noreferrer' alt='사이트 이동하기' title='사이트 이동하기'>
                                            <span className='site_text'>사이트 바로가기</span>
                                        </a>
                                    </div>

                                    <div className='notion_box'>
                                        <a href='https://abundant-cyclamen-76a.notion.site/e1da866d10b5433db64030a67482c9c6?pvs=4' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='깃헙 이동하기'>
                                            <span className='notion_text'>노션 바로가기</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className='slider_right'>
                                <div className='mokup_box'>
                                    <img className='mokup_img' src={$mokup_11} alt='mokup11' />
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>
        </section>
    );
}

export default Portfolio;