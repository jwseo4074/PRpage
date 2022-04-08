import "../css/page2.css";

function Page2() {
	return (
		<>
            {/* Third Page */}
            <div className="section section3">
                <h1> Experience</h1>
                <div className="section3_box">
                    <div className="section3_project">
                        <div className="box">
                            <div className="project">
                                <a href="https://qkrtmfqls.gabia.io/#/">
                                    <div className="number">
                                        <p className="numberCanHover">01</p>
                                        <p className="numberCanHover">Refri Bank</p>
                                        <span className="explain"> 부산 연합 SW 동아리 </span>
                                        <span className="smallName">PROJECT</span> 
                                        <p className="explainProject"> 6 WEEKS PROJECT </p>
                                    </div>
                                </a>
                            </div>

                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p className="numberCanHover">03</p>
                                        <p className="numberCanHover">노마드코더 크롬 앱 만들기</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <div className="box">
                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p className="numberCanHover">02</p>
                                        <p className="numberCanHover">졸업과제</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p className="numberCanHover">04</p>
                                        <p className="numberCanHover">프로젝트 4</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Page2;


