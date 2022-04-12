import "../style/page1.css";

import seojiwon_body1 from "../img/seojiwon_body1.jpeg";
import seojiwon_body2 from "../img/seojiwon_body2.jpeg";
import seojiwon_body2_test from "../img/seojiwon_body2_test.jpeg";
import down_arrow_icon from "../img/down-arrow_icon.svg";
import down_arrow_icon1 from "../img/down-arrow_icon1.svg";

// import { useMediaQuery } from 'react-responsive'

function Page1() {
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
                    </div>
                    <div className="categoryBottomBox">
                        <p className="categoryBottomBoxUpTag">zwon2056@gmail.com</p>
                        <p className="categoryBottomBoxBottomTag">Last Update : 2022/04/05 </p>
                    </div>
                </aside>
                <div className="mainForm">
                    <div className="left_box">
                        {/* <img className="seojiwon_body2_test" src={seojiwon_body2_test} /> */}
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
                </section>
            {/* } */}
        </>
    );
}

export default Page1;
