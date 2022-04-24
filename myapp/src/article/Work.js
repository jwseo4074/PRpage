import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import "../style/Article.css";


function Work() {
    return (
        <>
            <h1 id="article_title"> Work </h1>

            <Fade cascade bottom className="box">
                <div className="project">
                    <a href="https://qkrtmfqls.gabia.io/#/">
                        <div className="number">
                            <p className="numberCanHover">OOCI(오오씨아이)</p>
                            <span className="explain"> 여름계절학기 </span>
                            <span className="smallName">현장실습</span> 
                            <p className="explainProject"> ~~~</p>
                        </div>
                    </a>
                </div>
            </Fade>
        </>
    );
}

export default Work;