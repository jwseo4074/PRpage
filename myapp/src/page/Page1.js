import "../css/page1.css";
import seojiwon_body1 from "../img/seojiwon_body1.jpeg";
import seojiwon_body2 from "../img/seojiwon_body2.jpeg";
import seojiwon_body2_test from "../img/seojiwon_body2_test.jpeg";

function Page1() {
	return (
		<>
		    {/* First Page */}
            <div className="section section1">
                <div className="left_box">
                    <img className="seojiwon_body2_test" src={seojiwon_body2_test} />

                </div>
                <div className="right_box">
                    <div className ="right_box_h1_box">
                        <h1 className="delay_1">
                            <span className="name_in_h1">서지원</span>
                            &nbsp;
                            입니다
                            
                            <span className="point_in_h1">.</span>
                        </h1>
                    </div>

                    <div className ="right_box_p_box">
                        <p className="delay_2">
                            많은 사람들에게 영향을 주는 서비스를 만들고 싶은
                            <span className="point_in_p">,</span>
                        </p>
                        <p className="delay_3">
                            무언가를 예쁘게 꾸미고 디자인하는
                            <span className="point_in_p">,</span>
                        </p>
                        <p className="delay_4">
                            끊임없이 아이디어를 내고 기획을 잘하는
                            <span className="point_in_p">,</span>
                        </p>
                        <p className="delay_5">
                            팀원들과의 소통을 최우선으로 생각하는
                            <span className="point_in_p">,</span>
                        </p>
                        <p className="delay_6">
                            웹 개발자가 되는 것이 목표입니다
                            <span className="point_in_p">.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page1;
