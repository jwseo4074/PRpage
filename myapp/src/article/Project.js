import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import "../style/Article.css";
import "../style/ContentPage.css";

function Project() {
    return (
        <>  
            <a name="moveToProject"></a>
            <div id ="project_header_box">
                <h1 id="article_title"> Project </h1>
            </div>
            <div id = "project_big_box">
                <div id ="up_box_in_project_big_box">
                    <div className="project">
                        <a href="https://github.com/JO2SEO/AOMD" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">AOMD</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 부산대학교 </span>
                                    <span className="smallName"> 졸업과제 </span>
                                </div> 
                                <p className="explainProject"> 하이퍼레저 패브릭을 이용한 웹 플랫폼 </p>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://qkrtmfqls.gabia.io/#/" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">Refri Bank</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 부산 연합 SW 동아리 </span>
                                    <span className="smallName">PROJECT</span> 
                                </div>
                                <p className="explainProject"> 6 WEEKS PROJECT </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="bottom_box_in_project_big_box">
                    <div className="project">
                        <a href="https://qkrtmfqls.gabia.io/#/" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">PR page</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> 개인 프로젝트 </span>
                                    <span className="smallName"> React.js</span> 
                                </div>
                                <p className="explainProject"> 나만의 PR page 만들기</p>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://todolist-zwon.herokuapp.com" target="_blank">
                            <div className="number">
                                <p className="numberCanHover">Todo List</p>
                                <div className ="explain_and_smallName">
                                    <span className="explain"> NomadCoder </span>
                                    <span className="smallName"> lecture </span> 
                                </div>
                                <p className="explainProject"> Vanila JS를 이용한 Todo List 만들기 </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;