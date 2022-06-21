import React from 'react';
import '../style/Article.css';

function Read() {
	return (
		<>
			<a className="moveToTag" name="moveToRead"></a>
			<div id="project_header_box">
				<h1 id="article_title"> Read </h1>
			</div>

			<div id="project_big_box">
				<div className="education_project">
					<div className="number">
						<p className="numberCanHover fromLeft">모던 자바스크립트 Deep Dive</p>
						<div className="explain_and_smallName">
							<span className="explain"> Javascript</span>
							<span className="smallName">
								{' '}
								- 자바스크립트의 기본 개념과 동작 원리{' '}
							</span>
						</div>
						<p className="explainProject">
							개발자의 JS 숙련도에 따라 웹에서 제공하는 사용자 경험이 달라질 수 있음을
							인지하고 학습
						</p>
					</div>
				</div>
				<div className="education_project">
					<div className="number">
						<p className="numberCanHover fromLeft">리액트 프로그래밍 정석</p>
						<div className="explain_and_smallName">
							<span className="explain"> React.JS</span>
							<span className="smallName"></span>
						</div>
						<p className="explainProject">
							코드 자체보다는 프로젝트를 진행할 때 요구 명세서부터 화면 설계, 통신
							설계까지의 일련 과정을 학습
						</p>
					</div>
				</div>
				<div className="education_project">
					<div className="number">
						<p className="numberCanHover fromLeft">프론트엔드 웹 디자인 입문</p>
						<div className="explain_and_smallName">
							<span className="explain"> Web Design </span>
							<span className="smallName"> </span>
						</div>
						<p className="explainProject">
							디자이너와 협업을 하는 경우의 원활한 의사소통을 위한 노력의 첫 걸음
						</p>
					</div>
				</div>
			</div>
			<div id="blank_box"></div>
		</>
	);
}

export default Read;
