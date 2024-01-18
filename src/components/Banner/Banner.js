import React from 'react';

import Sidebar from './Sidebar/Sidebar';

import BannerContent from './BannerContent/BannerContent';

import './Banner.scss';

const Banner = () => {

    return (
        <div className='banner custom-section'>
            {/* <div id="cover" className="cover_left"></div> */}

            {/* 사이드바 */}
            <Sidebar />

            {/* 메인 첫 페이지 배너 */}
            <section className='intro_sec'>
                {/* <Header /> */}
                <BannerContent />
            </section>
        </div>
    );
}

export default Banner;