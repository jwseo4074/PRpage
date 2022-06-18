import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import '../style/ContentPage.css';

function Education() {
	return (
		<>
			<a className="moveToTag" name="moveToEducation"></a>
			<div id="project_header_box">
				<h1 id="article_title"> Education </h1>
			</div>
			<div id="project_big_box">
				<div id="up_box_in_project_big_box">
					<div className="project">
						<div className="number">
							<p className="numberCanHover">대학교</p>
							<div className="explain_and_smallName">
								<span className="explain"> 부산대학교 학사 졸업 </span>
								<span className="smallName"> 2017.3 - 2023.2 </span>
							</div>
							<p className="explainProject"> 총 평균 평점 : 3.53 / 4.5</p>
							<p className="explainProject"> 총 전공 평점 : 3.56 / 4.5</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
