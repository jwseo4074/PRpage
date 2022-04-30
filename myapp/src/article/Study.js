import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import "../style/Article.css";


function Study() {
    return (
        <>
            <a class="moveToTag" name="moveToStudy"></a>
            <div id ="project_header_box">
                <h1 id="article_title"> Study </h1>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">신입생 멘토링 스터디</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 여름계절학기 </span>
                                    <span className="smallName"> 현장실습 </span>
                                </div> 
                                <p className="explainProject"> 소속 계열사 미팅을 통한 현장 경험 축적</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">파이썬 리트코드 스터디</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 여름계절학기 </span>
                                    <span className="smallName"> 현장실습 </span>
                                </div> 
                                <p className="explainProject"> 소속 계열사 미팅을 통한 현장 경험 축적</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">발표 스터디</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 여름계절학기 </span>
                                    <span className="smallName"> 현장실습 </span>
                                </div> 
                                <p className="explainProject"> 소속 계열사 미팅을 통한 현장 경험 축적</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">모던 JS 딥 다이브 스터디</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 여름계절학기 </span>
                                    <span className="smallName"> 현장실습 </span>
                                </div> 
                                <p className="explainProject"> 소속 계열사 미팅을 통한 현장 경험 축적</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">React PR page 스터디</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 여름계절학기 </span>
                                    <span className="smallName"> 현장실습 </span>
                                </div> 
                                <p className="explainProject"> 소속 계열사 미팅을 통한 현장 경험 축적</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Study;