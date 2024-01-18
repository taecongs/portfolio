import React, { useState } from 'react';
import './TopButton.scss';

import github from './img/git_icon_w.png';
import notion from './img/notion_icon_w.png';
import plus from './img/plus_w2.png';



const TopButton = () => {
    const [isBall, setIsBall] = useState(false);

    const ballClick = () => {
        setIsBall(isBall => !isBall);
    }

    return (
        <div className="scroll__container">
            {/* <a href='#home'>
                <button id="top_btn" type="button" >TOP</button>
            </a> */}

            <div className={isBall ? 'ball active' : 'ball'} onClick={ballClick}>
                {/* <a href="#home">
                    <span className="first">
                        TOP
                    </span>
                </a> */}

                <a href='https://abundant-cyclamen-76a.notion.site/36c16de1f1bd4212a9be5040c2c3a655' target='_blank' rel='noopener noreferrer' alt='노션 바로가기' title='노션 바로가기'>
                    <span className="second">
                        <b className='nn_t'>Notion</b> <img src={notion} alt='노션 바로가기' />
                    </span>
                </a>


                <a href='https://github.com/taecongs' target='_blank' rel='noopener noreferrer' alt='깃헙 바로가기' title='깃헙 바로가기'>
                    <span className="third">
                        <img src={github} alt='깃헙 바로가기' /> <b className='gg_t'>Github</b>
                    </span>
                </a>

                <img className='plus_top' src={plus} alt='버튼 클릭 시 내용 보이거나 숨김' />
            </div>
        </div>

    )
}

export default TopButton;