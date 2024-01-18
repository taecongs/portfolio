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
                                    꾸준한 성장을 목표로 하고 있으며, 지금 당장은 업무 성과보다 작은 문제 해결에 끝까지 몰입할 수 있는 신입 개발자를 목표로 하고 있습니다.
                                </div>
                            </div>
                        </li>

                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>웹 디자이너에서 개발자로 전향한 사유가 어떻게 되나요?</p>

                                <div className='qa_detail'>
                                    전공은 아니였지만 교육을 통해 웹 디자이너로 2년여 근무하면서 많은 클라이언트들을 만나 홈페이지를 제작하였습니다. 워드프레스 기반이다보니 기본적인 테마가 지원되고 그것을 바탕으로 제작되어 있는 플러그인들을 가져와서 사용하였는데,
                                    항상 비슷한 패턴으로 작업이 진행되다보니 제 자신이 정체되는 느낌이 들었고 이러한 플러그인들을 처음부터 직접 만들어 사용해보면 어떨까? 하는 호기심에서 기왕 맘 먹은거 더 큰 물에서 놀아보자는 생각에 프론트엔드 개발자로 전향하게 되었습니다.
                                </div>
                            </div>
                        </li>

                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>개발자가 되려는 이유가 무엇인가요?</p>

                                <div className='qa_detail'>
                                    가장 큰 이유는 "내가 처음부터 끝까지 무언가를 계획해서 만들어 낼 수 있는 직업"이 아닐까 합니다. 예를 들면, 프로젝트 하나를 진행 하더라도 어떤 언어를 사용할건지, 혹은 어떤 프레임워크를 사용할건지,
                                    전반적인 설계부터 시작해서 배포까지 모든 것을 내가 스스로 구상할 수 있다는 점이 흥미로웠고 개발자는 저의 "직업"이 될 수 있다고 생각이 들었습니다.
                                </div>
                            </div>
                        </li>


                        <li onClick={activeMethod}>
                            <div className='toggle_item'>
                                <p className='qa_title'>되고 싶은 개발자는 무엇인가요?</p>

                                <div className='qa_detail'>
                                    첫번째는 "도태되지 않는 개발자"가 되고 싶습니다. 정형화된 업무가 아닌 매일매일이 배우고 발전해야 하는 직업이라 생각되기 때문에 계속 나아가고 공부하겠습니다.<br />
                                    두번째는 "소통하는 개발자"가 되고 싶습니다. 결국 사람들과 일하는 직업인 만큼 다양한 의견들을 공유하고 수용할 수 있는 사람이 되겠습니다.
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
                                    <span>꾸준히 성장하는 개발자</span> 방장원입니다.
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
                                            <a href="https://abundant-cyclamen-76a.notion.site/Portfolio-01b71b9d5b0e48b9b0ae85d3ce8366b9" target="_blank" rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                                <span className="notion_text">노션 바로가기</span>
                                            </a>
                                        </div>

                                        <div className="git_box2">
                                            <a href="https://github.com/taecongs" target="_blank" rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
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