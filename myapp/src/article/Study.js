import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import '../style/Article.css';

function Study() {
	return (
		<>
			<a className="moveToTag" name="moveToStudy"></a>
			<div id="project_header_box">
				<h1 id="article_title"> Study </h1>
			</div>
			{/* <div id="project_big_box"> */}
			<div id="project_big_box">
				<div className="study_box">
					<a
						href="https://complete-hosta-0ad.notion.site/Study-290235b6d3f242248cdce6c7b5289c25"
						target="_blank"
					>
						<div className="number">
							<p className="numberCanHover fromLeft"> 멘토링 </p>
							<div className="explain_and_smallName">
								<span className="explain"> 신입생 멘토링 스터디 </span>
								<span className="smallName"> - 멘토 </span>
							</div>
							<p className="explainProject">
								{' '}
								C++ - 기본 문법 학습 및 학부 CS 주요 개념 복습
							</p>
						</div>
					</a>
				</div>

				<div className="study_box">
					<a href="https://github.com/jwseo4074/Leetcode_Python" target="_blank">
						<div className="number">
							<p className="numberCanHover fromLeft"> 알고리즘 </p>
							<div className="explain_and_smallName">
								<span className="explain"> 파이썬 알고리즘 스터디 </span>
								<span className="smallName"> - 스터디장 </span>
							</div>
							<p className="explainProject">
								{' '}
								'파이썬 알고리즘 인터뷰' 책을 통한 알고리즘 기술 습득
							</p>
							<p className="explainProject"> 시간 제한 실전 테스트</p>
						</div>
					</a>
				</div>

				<div className="study_box">
					<a
						href="https://complete-hosta-0ad.notion.site/Study-290235b6d3f242248cdce6c7b5289c25"
						target="_blank"
					>
						<div className="number">
							<p className="numberCanHover fromLeft"> Web Front</p>
							<div className="explain_and_smallName">
								<span className="explain"> 관련 기술 발표 스터디</span>
								<span className="smallName"> - 스터디 부원 </span>
							</div>
							<p className="explainProject">
								{' '}
								주에 1번, Web Front 관련 이슈 및 기술을 공부해오고 발표하는 방식
							</p>
						</div>
					</a>
				</div>

				{/* </div> */}
				{/* <div id="project_big_box"> */}

				<div className="study_box">
					<a
						href="https://complete-hosta-0ad.notion.site/Study-290235b6d3f242248cdce6c7b5289c25"
						target="_blank"
					>
						<div className="number">
							<p className="numberCanHover fromLeft">Computer Science</p>
							<div className="explain_and_smallName">
								<span className="explain"> CS 발표 스터디 </span>
								<span className="smallName"> - 스터디 부원 </span>
							</div>
							<p className="explainProject">
								주에 1번, CS 분야를 하나씩 맡아 관련 주제에 대해 공부해오고 발표하는
								방식
							</p>
						</div>
					</a>
				</div>
			</div>
		</>
	);
}

export default Study;
