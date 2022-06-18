import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import '../style/Article.css';

function Share() {
	return (
		<>
			<a className="moveToTag" name="moveToShare"></a>
			<div id="project_header_box">
				<h1 id="article_title"> Share </h1>
			</div>
			<div>
				<div>
					<div className="project">
						<a href="https://github.com/jwseo4074" target="_blank">
							<div className="number">
								<p className="numberCanHover">Github</p>
								<div className="explain_and_smallName">
									<span className="explain"> jwseo4074</span>
									{/* <span className="smallName"> zwon2056 </span> */}
								</div>
								<p className="explainProject"> https://github.com/jwseo4074</p>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div className="project">
						<a href="https://velog.io/@zwon" target="_blank">
							<div className="number">
								<p className="numberCanHover">Velog</p>
								<div className="explain_and_smallName">
									<span className="explain"> Algorithm, Tech Blog</span>
									{/* <span className="smallName"> 서지원 </span> */}
								</div>
								<p className="explainProject">
									{' '}
									배우고 공부한 모든 것들을 기록하는 좋은 습관
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div className="project">
						<a
							href="https://complete-hosta-0ad.notion.site/zwon-s-Archive-7151c1ea4cac40f9854ad19826513af9"
							target="_blank"
						>
							<div className="number">
								<p className="numberCanHover">Notion</p>
								<div className="explain_and_smallName">
									<span className="explain"> zwon’s Archive </span>
									{/* <span className="smallName">  </span> */}
								</div>
								<p className="explainProject">
									{' '}
									배우고 공부했던 모든 것들을 기록하는 좋은 습관
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div id="project_big_box">
				<div id="up_box_in_project_big_box">
					<div className="project">
						<a href="https://github.com/JO2SEO/AOMD" target="_blank">
							<div className="number">
								<p className="numberCanHover">Youtube</p>
								<div className="explain_and_smallName">
									<span className="explain"> 유일한 취미 </span>
									{/* <span className="smallName"> 현장실습 </span> */}
								</div>
								<p className="explainProject">
									{' '}
									운동하면서 스트레스를 풀고 건강한 개발자가 되기위한
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Share;
