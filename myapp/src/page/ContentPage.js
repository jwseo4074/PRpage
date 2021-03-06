import '../style/ContentPage.css';
import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';

import Navcategory from '../nav/NavCategory';

import Project from '../article/Project';
import Work from '../article/Work';
import Share from '../article/Share';
import Education from '../article/Education';
import Study from '../article/Study';
import Read from '../article/Read';

function ContentPage() {
	return (
		<>
			<div className="section section2">
				<div className="section2_box">
					<div className="section2_left_category">
						<Navcategory></Navcategory>
					</div>

					<article className="section2_right_content">
						<Project></Project>
						<Work></Work>
						<Share></Share>
						<Education></Education>
						<Study></Study>
						<Read></Read>
					</article>
				</div>
			</div>
		</>
	);
}
export default ContentPage;
