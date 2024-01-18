import './Skill.scss';

import $skill1 from './img/icon1.png';
import $skill2 from './img/icon2.png';
import $skill3 from './img/icon3.png';
import $skill4 from './img/icon4.png';
import $skill5 from './img/icon5.png';
import $skill6 from './img/icon6.png';
import $skill7 from './img/icon7.png';
import $skill8 from './img/icon8.png';
import $skill9 from './img/icon9.png';
import $skill10 from './img/icon10.png';
import $skill11 from './img/icon11.png';
import $skill12 from './img/icon12.png';


const Skill = () => {
    // 페이지 스크롤 애니메이션 정의
    const options = {
        // viewport
        root: null,
        rootMargin: "0px",
        // 50%가 viewport에 들어와 있어야 callback 실행
        threshold: 1.0,
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_skill');
            } else {
                entry.target.classList.remove('active_skill');
            }
        });
    }, options);

    const skill_1 = document.querySelectorAll('.skill_box1');
    const skill_2 = document.querySelectorAll('.skill_box2');
    const skill_3 = document.querySelectorAll('.skill_box3');
    const skill_4 = document.querySelectorAll('.skill_box4');
    const skill_5 = document.querySelectorAll('.skill_box5');
    const skill_6 = document.querySelectorAll('.skill_box6');
    const skill_7 = document.querySelectorAll('.skill_box7');
    const skill_8 = document.querySelectorAll('.skill_box8');
    const skill_9 = document.querySelectorAll('.skill_box9');
    const skill_10 = document.querySelectorAll('.skill_box10');
    const skill_11 = document.querySelectorAll('.skill_box11');
    const skill_12 = document.querySelectorAll('.skill_box12');

    skill_1.forEach(el => observer.observe(el));
    skill_2.forEach(el => observer.observe(el));
    skill_3.forEach(el => observer.observe(el));
    skill_4.forEach(el => observer.observe(el));
    skill_5.forEach(el => observer.observe(el));
    skill_6.forEach(el => observer.observe(el));
    skill_7.forEach(el => observer.observe(el));
    skill_8.forEach(el => observer.observe(el));
    skill_9.forEach(el => observer.observe(el));
    skill_10.forEach(el => observer.observe(el));
    skill_11.forEach(el => observer.observe(el));
    skill_12.forEach(el => observer.observe(el));




    return (
        <section className='custom-section skill_container'>

            <div className='skillContant_inner'>
                {/* HTML5 */}
                <div className='skill_box1'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_1'>
                            <img className="skill_card_icon" src={$skill1} alt="HTML5" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>HTML5</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>웹표준 및 웹접근성 준수</li>
                                <li>마크업, 페이지 콘텐츠 구조화</li>
                                <li>브라우저 렌더링 프로세스 이해</li>
                                <li>폼요소, 테이블 사용</li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* CSS3 */}
                <div className='skill_box2'>
                    <div className='skill_card'>
                        <div className='skill_card_header_2'>
                            <img className="skill_card_icon" src={$skill2} alt="CSS3" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>CSS3</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>크로스 브라우징을 위한 스타일링</li>
                                <li>Grid & Flex 레이아웃</li>
                                <li>keyframe을 활용한 애니메이션 구현</li>
                                <li>반응형(미디어쿼리) 사용</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 자바스크립트 */}
                <div className='skill_box3'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_3'>
                            <img className="skill_card_icon" src={$skill3} alt="자바스크립트" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>JAVAScript</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>ES6 문법 사용</li>
                                <li>프로토타입 개념 이해</li>
                                <li>비동기 & 동기 프로세스 이해</li>
                                <li>네비게이션 구현 및 폼 유효성검사 등</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 제이쿼리  */}
                <div className='skill_box4'>
                    <div className='skill_card mob_top'>
                        <div className='skill_card_header_4'>
                            <img className="skill_card_icon wd_icon3" src={$skill4} alt="제이쿼리" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>JQuery</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>JQuery 셀렉터 사용</li>
                                <li>이벤트 바인딩, 속성 정의</li>
                                <li>DOM 조작으로 동적인 홈페이지 작업</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 부트스트랩  */}
                <div className='skill_box5'>
                    <div className='skill_card down_1 mod_bottom'>
                        <div className='skill_card_header_5'>
                            <img className="skill_card_icon" src={$skill5} alt="부트스트랩" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Bootstrap</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>레이아웃 구현</li>
                                <li>버튼, 입력창 등의 디자인 사용</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 리엑트  */}
                <div className='skill_box6'>
                    <div className='skill_card mob_top'>
                        <div className='skill_card_header_6'>
                            <img className="skill_card_icon" src={$skill6} alt="리엑트" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>React</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>컴포넌트를 분리하여 작업</li>
                                <li>React Router 사용 경험</li>
                                <li>Hooks 사용 경험</li>
                                <li>Redux 상태 관리 이해</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sass */}
                <div className='skill_box7'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_7'>
                            <img className="skill_card_icon" src={$skill7} alt="Sass" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Sass</h2>

                            <ul className="skill_card_knowledge">
                                <li>Front-end</li>
                                <li>스타일 코드의 재활용(&) 경험</li>
                                <li>코드의 가독성</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Node.js */}
                <div className='skill_box8'>
                    <div className='skill_card mod_bottom'>
                        <div className='skill_card_header_8'>
                            <img className="skill_card_icon wd_icon1" src={$skill8} alt="Nodejs" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Node.js</h2>

                            <ul className="skill_card_knowledge">
                                <li>Back-end</li>
                                <li>Express 기본 지식</li>
                                <li>MVC패턴을 통해 구조 설계</li>
                                <li>Restful API 작성 경험</li>
                                <li>Sequelize 사용 경험</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* MySQL */}
                <div className='skill_box9'>
                    <div className='skill_card down_1'>
                        <div className='skill_card_header_9'>
                            <img className="skill_card_icon wd_icon1" src={$skill9} alt="MySQL" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>MySQL</h2>

                            <ul className="skill_card_knowledge">
                                <li>Back-end</li>
                                <li>회원가입, 로그인, 회원탈퇴, 회원정보 수정 등 데이터베이스 관리 경험</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* git */}
                <div className='skill_box10'>
                    <div className='skill_card mob_top'>
                        <div className='skill_card_header_10'>
                            <img className="skill_card_icon" src={$skill10} alt="git" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Git</h2>

                            <ul className="skill_card_knowledge">
                                <li>Collaboration & Tools</li>
                                <li>프로젝트 코드 관리 경험</li>
                                <li>add, commit, pull, push, branch 사용</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Slack */}
                <div className='skill_box11'>
                    <div className='skill_card down_1 mod_bottom'>
                        <div className='skill_card_header_11'>
                            <img className="skill_card_icon wd_icon2" src={$skill11} alt="slack" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Slack</h2>

                            <ul className="skill_card_knowledge">
                                <li>Collaboration & Tools</li>
                                <li>프로젝트 관련 워크스페이스를 구성하여 협업</li>
                                <li>서드파티 앱과의 연동 경험(git)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 포토샵 */}
                <div className='skill_box12'>
                    <div className='skill_card mob_top'>
                        <div className='skill_card_header_12'>
                            <img className="skill_card_icon" src={$skill12} alt="포토샵" />
                        </div>

                        <div className='skill_card_body'>
                            <h2 className='skill_card_title'>Photoshop</h2>

                            <ul className="skill_card_knowledge">
                                <li>Collaboration & Tools</li>
                                <li>이미지 편집 및 디자인 경험</li>
                                <li>상품 상세페이지 제작 경험</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skill;