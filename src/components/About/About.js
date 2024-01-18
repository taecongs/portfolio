import './About.scss';

import $img1 from './img/ov_img2.gif';
import $pdf from './pdf/이력서.pdf';


const About = () => {
    // 페이지 스크롤 애니메이션 정의
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }

    const options2 = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_about_l');
            } else {
                entry.target.classList.remove('active_about_l');
            }
        });
    }, options);

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active_about_r');
            } else {
                entry.target.classList.remove('active_about_r');
            }
        });
    }, options2);

    const about_l = document.querySelectorAll('.about_left');
    const about_r = document.querySelectorAll('.about_right');

    about_l.forEach(el => observer.observe(el));
    about_r.forEach(el => observer2.observe(el));



    return (
        <section className='custom-section about_container'>
            <div className='aboutContant_inner'>
                <div className='about_left'>
                    <img src={$img1} alt='about 왼쪽 이미지' />
                </div>

                <div className='about_right'>
                    <h2 className='about_title'>안녕하세요, 프론트엔드 개발자를 꿈꾸는 방장원입니다.</h2>

                    <p className='av_p av_1' style={{ transform: 'translate(0px, 3px)', opacity: '1', color: 'rgb(0, 0, 0)' }}>
                        <strong className="hv_text" style={{ color: 'rgb(0, 0, 0)' }}>머릿속으로 상상만 하던 구조와 움직임</strong> 들을 제가 배운 기술로 구현해가는 과정들이 흥미롭고 재밌습니다.
                        항상 더 나은 서비스 환경을 사용자에게 제공하기 위해 노력하는 프론트엔드 개발자가 되겠습니다.
                    </p>

                    <p className='av_p av_2' style={{ transform: 'translate(0px, 3px)', opacity: '1', color: 'rgb(0, 0, 0)' }}>
                        <strong className="hv_text" style={{ color: 'rgb(0, 0, 0)' }}>"내가 아는 것이 전부가 아니다"</strong> 제가 항상 되새기는 말입니다. 많이 부족하지만 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고 계속 해서 나아갈 자신이 있으며,
                        성실하게 쌓은 지식으로 회사에 실질적인 도움이 되는 <strong className="hv_text" style={{ color: 'rgb(0, 0, 0)' }}>프론트엔드 개발자</strong>로 일하고 싶습니다.
                    </p>


                    {/* <div className='download_inner'>
                        <a className='download_btn' href={$pdf} download='프론트엔드 방장원 이력서'>이력서 다운로드</a>
                    </div> */}

                    <div className='download_inner'>
                        <div className='slder_link'>
                            <div className='myintro_box'>
                                <a href={$pdf} download='프론트엔드 방장원 이력서' alt='이력서 다운로드' title='이력서 다운로드'>
                                    <span className='site_text'>이력서 다운로드</span>
                                </a>
                            </div>

                            <div className='notion_box'>
                                <a href='https://abundant-cyclamen-76a.notion.site/36c16de1f1bd4212a9be5040c2c3a655' target='_blank' rel='noopener noreferrer' alt='노션 이동하기' title='노션 이동하기'>
                                    <span className='notion_text'>노션 바로가기</span>
                                </a>
                            </div>

                            <div className='git_box'>
                                <a href='https://github.com/taecongs' target='_blank' rel='noopener noreferrer' alt='깃헙 이동하기' title='깃헙 이동하기'>
                                    <span className='git_text'>깃헙 바로가기</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;