import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import "../style/Article.css";


function Study() {
    return (
        <>
            <h1 id="article_title">Study</h1>

            <Fade cascade bottom className="box">
                <div className="project">
                    <a href="https://qkrtmfqls.gabia.io/#/">
                        <div className="number">
                            <p className="numberCanHover">Refri Bank</p>
                            <span className="explain"> 부산 연합 SW 동아리 </span>
                            <span className="smallName">PROJECT</span> 
                            <p className="explainProject"> 6 WEEKS PROJECT </p>
                        </div>
                    </a>
                </div>
            </Fade>
        </>
    );
}

export default Study;