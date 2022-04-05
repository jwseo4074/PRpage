import "../css/page1.css";
import seojiwon_body1 from "../img/seojiwon_body1.jpeg";
import seojiwon_body2 from "../img/seojiwon_body2.jpeg";
import seojiwon_body2_test from "../img/seojiwon_body2_test.jpeg";

function Page1() {
    // const mouseHover = "mouse_hover";

    // mouseHover.classList.toggle(mouseHover);

	return (
		<>
		    {/* First Page */}
            <div className="section section1">
                <div className="category"> 
                    <div>
                        <h1>
                            <a href="https://github.com/jwseo4074/">
                                <span>Github 
                                </span>
                                <span className="point_in_h1">.</span>
                            </a>
                        </h1>
                        <h1>
                            <a href="https://velog.io/@zwon">
                                <span>Velog 
                                </span>
                                <span className="point_in_h1">.</span>
                            </a>
                        </h1>
                    </div>
                    <div className="connect_part">
                        <p>zwon2056@gamil.com</p>
                        <p>Last Update : 2022/04/05 </p>
                    </div>
                </div>
                <div className="left_box">
                    <img className="seojiwon_body2_test" src={seojiwon_body2_test} />

                </div>
                <div className="right_box">
                    <div className ="right_box_h1_box">
                        <h1 className="delay_1">
                            <span className="name_in_h1">서지원</span>
                            입니다
                            <span className="point_in_h1">.</span>
                        </h1>
                    </div>

                    <div className ="right_box_p_box">
                        <p className="delay_2">
                            프론트엔드 개발자를 희망하고 있습니다
                            <span className="point_in_p"></span>
                        </p>
                        <p className="delay_3">
                            팀원들과의 소통을 가장 중요시합니다
                            <span className="point_in_p"></span>
                        </p>
                        <p className="delay_4">
                            개발 초기 기획 단계의 중요성을 잘 알고있습니다
                            <span className="point_in_p"></span>
                        </p>
                        <p className="delay_5">
                            배운 모든 것들을 기록하고 공유하는 것을 좋아합니다
                            <span className="point_in_p"></span>
                        </p>
                        <p className="delay_6">
                            나날이 발전하는 웹 개발자가 되겠습니다
                            <span className="point_in_p"></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page1;
