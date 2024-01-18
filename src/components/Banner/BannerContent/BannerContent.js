import React, { useState, useEffect } from 'react';

import './BannerContent.scss';

const BannerContent = () => {
    const [Text, setText] = useState('');
    const [Text2, setText2] = useState('');
    const [Count, setCount] = useState(0);
    const [Count2, setCount2] = useState(0);
    const txt = '     WELCOME TO MY \n     PORTFOLIO';
    const txt2 = 'WELCOME TO MY \n PORTFOLIO';

    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크 
        }, 160);
        if (Count === txt.length) {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    });

    useEffect(() => {
        const interval2 = setInterval(() => {
            setText2(Text2 + txt2[Count2]); // 이전 set한 문자 + 다음 문자
            setCount2(Count2 + 1); // 개수 만큼 체크 
        }, 160);
        if (Count2 === txt2.length) {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval2); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval2); // 언마운트시 setInterval을 해제합니다
    });

    return (
        <article>
            <div className='bannerContant_inner'>
                <pre className="banner_title pc_b">{Text}</pre>
                <pre className="banner_title mob_b">{Text2}</pre>
                <p className='banner_p'>안녕하세요, 프론트엔드 개발자를 꿈꾸는 방장원입니다.</p>
            </div>

            <div className="banner_bg">
                <span className="ball1"></span>
                <span className="ball2"></span>
            </div>

            <div className='banner_detail'>
                {/* <small>해당 홈페이지의 해상도는 PC버전(1920 X 1080)을 기준으로 최적화되어 있으며, 다른 환경에서는 브라우저 창(50%)를 권장드립니다.</small> */}
                <small>해당 홈페이지는 React 기반으로 제작되었으며, 해상도는 PC버전(1920 X 1080)을 기준으로 최적화되어 있습니다.</small> 
                {/* <small>해당 홈페이지의 해상도는 PC버전(1920 X 1080)을 기준으로 최적화되어 있으며, 다른 환경에서는 50%를 권장 드립니다.</small> */}
                {/* <small>해당 홈페이지의 해상도는 PC버전을 기준으로 최적화되어 있습니다.</small> */}
            </div>
        </article>
    );
}

export default BannerContent;