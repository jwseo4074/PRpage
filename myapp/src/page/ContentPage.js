import "../style/ContentPage.css";
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Navcategory from "../nav/NavCategory"

import Project from "../article/Project"
import Work from "../article/Work"
import Share from "../article/Share"
import Education from "../article/Education"
import Study from "../article/Study"

function ContentPage() {
	return (
		<>
            <div className="section section2">
                <div className="section2_box">
                    <nav className="section2_left_category">
                        <Navcategory></Navcategory>
                    </nav>

                    <article className="section2_right_content">
                        <Project></Project>
                        <Work></Work>
                        <Share></Share>
                        <Education></Education>
                        <Study></Study>
                    </article>
                </div>
            </div>
        </>
    );
}
export default ContentPage;


