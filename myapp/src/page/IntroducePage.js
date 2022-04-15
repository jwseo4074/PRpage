import "../style/IntroducePage.css";
import React, { useState, useEffect } from 'react';

import seojiwon_body1 from "../img/seojiwon_body1.jpeg";
import seojiwon_body2 from "../img/seojiwon_body2.jpeg";
import seojiwon_body2_test from "../img/seojiwon_body2_test.jpeg";
import down_arrow_icon from "../img/down-arrow_icon.svg";
import down_arrow_icon1 from "../img/down-arrow_icon1.svg";
import upArrow from "../img/upArrow.svg";

// import { useMediaQuery } from 'react-responsive'

function IntroducePage() {

    const HIDDEN_CLASSNAME = "hidden";


    const [ScrollValueOfY, setScrollValueOfY] = useState(0);  
    // 스크롤값을 저장하기 위한 state
    const [MoveToTopBtnStatus, setMoveToTopBtnStatus] = useState(false); // 버튼 상태

    const moveToTop = () => {
        document.documentElement.scrollTop = 0;
        console.log("moveToTopBtn Click");
        setScrollValueOfY(0);  // ScrollY 의 값을 초기화
        setMoveToTopBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }

    const handleScrollValueOfY = () => {
        setScrollValueOfY(window.pageYOffset); 
        console.log("window 스크롤 값을 <ScrollValueOfY> state에 저장");
        console.log(
            ` \n Scroll Event - 5 
              \n window.pageYOffset = ${window.pageYOffset}
              \n ScrollValueOfY = ${ScrollValueOfY}`);
        
        if(ScrollValueOfY > 70) {
            // 100 이상이면 버튼이 보이게
            setMoveToTopBtnStatus(true);
        } else {
            // 100 이하면 버튼이 사라지게
            setMoveToTopBtnStatus(false);
        } 
    }

    useEffect(() => {
        // 그냥 state 조건 없이 바로 실행? 
        const currentScrollState = () => {
            console.log("\n Scroll Event - 3, \n state 조건 없이 웹 로드 되면 바로 이 함수 호출, ")
            console.log("\n Scroll Event - 4, \n 현재 scroll 값을 저장하는 이벤트 리스너 함수 호출 ")

            window.addEventListener('scroll', handleScrollValueOfY);
            
        }
        
        console.log("\n Scroll Event - 1 , \n state 조건 없이 웹 로드 되면 바로 실행, ")
        console.log("\n Scroll Event - 2 , \n addEventListener 함수를 실행 ")
        currentScrollState(); // addEventListener 함수를 실행
        // console.log("@@@@@@@@@@@@@");

        return () => {
            window.removeEventListener('scroll', handleScrollValueOfY); 
            // addEventListener 함수를 삭제
            // 지금 같이 스크롤을 사용하는 경우 처럼 한 번 실행하는 것이 아닌 여러번
            // addEventListener를 사용할 때에는 removeEventListener를 꼭 해준다.
            // 그렇지 않으면 여러번 호출 되고, 메모리에 gabarge collect
        }
    })
    useEffect(() => {
        // console.log("스크롤되면 제일 처음, 스크롤 이벤트 발생 \n ScrollY is ", ScrollValueOfY); 
        console.log(`스크롤되면 제일 처음, 스크롤 이벤트 발생 \n ScrollY is ${ScrollValueOfY}`); 

        // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollValueOfY])

	return (
		<>
            <section className="section section1">
                <aside className="category"> 
                    <div className="categoryUpBox">
                        <a href="https://github.com/jwseo4074/">
                            GitHub 
                            <span className="point_in_h1">.</span>
                        </a>
                    
                        <a href="https://velog.io/@zwon">
                            Velog 
                            <span className="point_in_h1">.</span>
                        </a>
                    
                        <a href="https://www.notion.so/00b328221c3449b8bc0f4c27ef903354">
                            Notion
                            <span className="point_in_h1">.</span>
                        </a>

                        <a href="https://www.youtube.com/channel/UCC7EXepoyKcFv_mvij1Y_XA">
                            Youtube
                            <span className="point_in_h1">.</span>
                        </a>
                    </div>
                    <div className="categoryBottomBox">
                        <p className="categoryBottomBoxUpTag">zwon2056@gmail.com</p>
                        <p className="categoryBottomBoxBottomTag">Last Update : 2022/04/05 </p>
                    </div>
                </aside>
                <div className="mainForm">
                    <div className="left_box">
                    </div>
                     <div className="right_box">
                        <div className ="right_box_h1_box">
                            <h1 className="commentInRightBox delay_1">
                                <span className="name_in_h1">서지원</span>
                                입니다.
                            </h1>
                        </div>
                        <div className ="right_box_p_box">
                            <p className="commentInRightBox delay_2">
                                프론트엔드 개발자를 희망하고 있습니다
                                <span className="point_in_p">.</span>
                            </p>
                            <p className="commentInRightBox delay_3">
                            배운 모든 것들을 기록하고 공유하는 것을 좋아합니다
                                <span className="point_in_p">.</span>
                            </p>
                            <p className="commentInRightBox delay_4">
                                팀원들과의 소통과 개발 초기 기획 단계의 중요성을 잘 알고있습니다
                                <span className="point_in_p">.</span>
                            </p>
                            <div className="right_box_down_icon">
                                <img className="down_arrow_icon" src={down_arrow_icon1}></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <TopButton onClick={moveToTop}/> */}
            </section>
            <button className={ MoveToTopBtnStatus ? "moveTopBtnBoxActive" : HIDDEN_CLASSNAME } onClick={moveToTop}>
                <img className="moveTopBtn" src={upArrow}></img>
            </button>
        </>
    );
}

export default IntroducePage;
