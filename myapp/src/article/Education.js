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
						<a href="https://github.com/JO2SEO/AOMD" target="_blank">
							<div className="number">
								<p className="numberCanHover">OOCI</p>
								<span className="explain"> 여름계절학기 </span>
								<span className="smallName">현장실습</span>
								<p className="explainProject"> ~~~</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
