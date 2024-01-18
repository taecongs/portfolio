import React from 'react';

import './Contact.scss';


const Contact = () => {
    function activeMethod(event) {
        const current = event.currentTarget;
        const chkActive = current.classList.value.indexOf("active_qa");
        console.log('************************', current);

        closeMothodAll();

        if (chkActive === -1) {
            current.classList.add("active_qa");
        }
    }

    function closeMothodAll() {
        let bx = document.getElementsByClassName("qa_ul");

        for (let i = 0; i < bx[0].children.length; i++) {
            bx[0].children[i].classList.remove("active_qa");
            // console.log(bx[0].children.length);
        }
    }

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
                    entry.target.classList.add('up_contact');
                } else {
                    entry.target.classList.remove('up_contact');
                }
            });
        }, options);

        const $qa = document.querySelectorAll('.qa_box');
        const $cb = document.querySelectorAll('.contact_box');

        $qa.forEach(el => observer.observe(el));
        $cb.forEach(el => observer.observe(el));



    return (
        <section className='custom-section contact_container'>
            <div className='contactContant_inner'>

                <div className='qa_box'>
                    <ul className="qa_ul">
                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>자신에 대해 자유롭게 표현해 주세요!</p>

                                <div className='qa_detail'>
                                    꾸준한 성장을 목표로 하고 있으며, 지금 당장은 작은 문제부터 큰 도전까지 어떤 과제에도 끈질기게 몰입하여 사용자 경험을 높이는 퍼블리셔로 성장하고자 합니다. 
                                </div>
                            </div>
                        </li>

                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>웹 디자이너에서 퍼블리셔로 전향한 사유가 어떻게 되나요?</p>

                                <div className='qa_detail'>
                                웹 디자이너로서의 경력을 쌓은 후, 새로운 도전과 성장의 기회를 찾고자 퍼블리셔로 전향하게 되었습니다. 웹 디자이너와 퍼블리셔의 역할과 책임은 서로 다르지만, 두 분야 간의 유기적인 협업이 중요하다고 생각하기 때문에 퍼블리셔로 전향하여 웹 사이트의 기술적인 측면과 동작 방식에 대해 더욱 깊이 파고들어 웹 개발 역량을 강화하고자 합니다.
                                </div>
                            </div>
                        </li>

                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>퍼블리셔가 되려는 이유가 무엇인가요?</p>

                                <div className='qa_detail'>
                                    가장 큰 이유는 "내가 처음부터 끝까지 무언가를 계획해서 만들어 낼 수 있는 직업"이 아닐까 합니다. 예를 들면, 프로젝트 하나를 진행 하더라도 어떤 언어를 사용할건지, 혹은 어떤 프레임워크를 사용할건지,
                                    전반적인 설계부터 시작해서 배포까지 모든 것을 스스로 구상할 수 있다는 점이 흥미로웠고 퍼블리셔는 저의 "직업"이 될 수 있다고 생각이 들었습니다.
                                </div>
                            </div>
                        </li>


                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>되고 싶은 퍼블리셔는 무엇인가요?</p>

                                <div className='qa_detail'>
                                    디자인과 코드의 조화가 창출하는 디지털 세계에서 사용자 경험을 최적화하고 창의적인 아이디어를 현실로 구현하는 과정에 큰 매력을 느끼고 있습니다.
                                    앞으로 마주칠 다양한 문제들을 해결하기 위해서는 모든 분야에 관심을 가져야 한다고 생각하기 때문에 새로운 기술들을 차근차근 학습해 나갈 생각이며, 
                                    사람들과 일하는 직업인 만큼 다양한 의견들을 공유하고 수용할 수 있는 사람이 될 수 있도록 최선을 다하려고 합니다.
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className='contact_box'>
                    <ul className='recruit_submit'>
                        <li>
                            <p className="category">
                                <span>Contact</span>
                            </p>

                            <div className='contact_info'>
                                <h2>
                                    <span>꾸준히 성장하는 퍼블리셔</span> 방장원입니다.
                                    <p className="info_1">이메일 : bks0927w@gmail.com</p>
                                    <p className="info_2">전화번호 : 010-8127-9927</p>
                                </h2>
                            </div>

                        </li>

                        <li>
                            <p className="category">
                                <span>Channels</span>
                            </p>

                            <div className='contact_info'>
                                <h2>
                                    <span>다양한 기술을 공부</span>하며 익혀두려 노력하고 있습니다.

                                    <div className='contact_link'>
                                        <div className="notion_box2">
                                            <a href="https://abundant-cyclamen-76a.notion.site/f2f7b08e86a54692b4e9f0b140d51c08?pvs=4" target="_blank" rel='noopener noreferrer' title='노션 이동하기'>
                                                <span className="notion_text">노션 바로가기</span>
                                            </a>
                                        </div>

                                        <div className="git_box2">
                                            <a href="https://github.com/taecongs" target="_blank" rel='noopener noreferrer' title='깃헙 이동하기'>
                                                <span className="git_text">깃헙 바로가기</span>
                                            </a>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;