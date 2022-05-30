import React from 'react';
// import Fade from 'react-reveal/Fade';
import '../style/Article.css';
import '../style/ContentPage.css';

function Project() {
	return (
		<>
			<a class="moveToTag" name="moveToProject"></a>
			<div id="project_header_box">
				<h1 id="article_title"> Project </h1>
			</div>
			<div id="project_big_box">
				<div id="up_box_in_project_big_box">
					<div className="project">
						<a href="https://github.com/JO2SEO" target="_blank">
							<div className="number">
								<p className="numberCanHover">AOMD</p>
								<div className="explain_and_smallName">
									<span className="explain"> 부산대학교 </span>
									<span className="smallName"> 졸업과제 </span>
								</div>
								<p className="explainProject">
									하이퍼레저 패브릭을 이용한 웹 플랫폼 설계
								</p>
							</div>
						</a>
					</div>
					<div className="project">
						<a href="https://qkrtmfqls.gabia.io/#/" target="_blank">
							<div className="number">
								<p className="numberCanHover">Refri Bank</p>
								<div className="explain_and_smallName">
									<span className="explain"> 부산 연합 SW 동아리 </span>
									<span className="smallName">PROJECT</span>
								</div>
								<p className="explainProject">6 WEEKS PROJECT</p>
							</div>
						</a>
					</div>
				</div>
				<div id="bottom_box_in_project_big_box">
					<div className="project">
						<a href="https://jwseo4074.github.io/PRpage/" target="_blank">
							<div className="number">
								<p className="numberCanHover"> PR page </p>
								<div className="explain_and_smallName">
									<span className="explain"> Toy Project </span>
									<span className="smallName"> Publishing</span>
								</div>
								<p className="explainProject"> zwon's PR page using JS, CSS</p>
							</div>
						</a>
					</div>
					<div className="project">
						<a href="https://jwseo4074.github.io/todoList-Vanila-JS/" target="_blank">
							<div className="number">
								<p className="numberCanHover">Todo List </p>
								<div className="explain_and_smallName">
									<span className="explain"> Toy Project </span>
									<span className="smallName"> Vanila JS </span>
								</div>
								<p className="explainProject"> todoList using Vanila JS </p>
							</div>
						</a>
					</div>
				</div>
				<div id="bottom_box_in_project_big_box">
					<div className="project">
						<a href="https://jwseo4074.github.io/webSite-React-JS/" target="_blank">
							<div className="number">
								<p className="numberCanHover"> Interactive Web </p>
								<div className="explain_and_smallName">
									<span className="explain"> Toy Project </span>
									<span className="smallName"> React.js</span>
								</div>
								<p className="explainProject">
									{' '}
									공부해왔던 모든 기능을 접목시킨 웹 사이트{' '}
								</p>
							</div>
						</a>
					</div>
					<div className="project">
						<a href="https://todolist-zwon.herokuapp.com" target="_blank">
							<div className="number">
								<p className="numberCanHover"></p>
								<div className="explain_and_smallName">
									<span className="explain"> </span>
									<span className="smallName"> </span>
								</div>
								<p className="explainProject"></p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
