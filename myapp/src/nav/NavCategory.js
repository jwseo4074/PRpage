import '../style/NavCategory.css';
// import React, { useState, useEffect } from 'react';

// import Project from "../article/Project"
// import Work from "../article/Work"
// import Share from "../article/Share"
// import Education from "../article/Education"
// import Study from "../article/Study"

function Navcategory() {
	return (
		<>
			<div className="section2_left_category_contentBox">
				<div className="catogory_one_box category_project">
					<a className="category_title" href="#moveToProject">
						Project
					</a>
					<div className="category_content project1">AOMD</div>
					<div className="category_content project2">Refri Bank</div>
					<div className="category_content project3">PR page</div>
					<div className="category_content project4">Todo List</div>
					<div className="category_content project5">React App</div>
				</div>

				<div className="catogory_one_box category_work">
					<a className="category_title" href="#moveToWork">
						Work
					</a>
					<div className="category_content work1">OOCI 오오씨아이 현장실습</div>
				</div>
				<div className="catogory_one_box category_share">
					<a className="category_title" href="#moveToShare">
						Share
					</a>
					<div className="category_content share1">Github</div>
					<div className="category_content share2">Velog</div>
					<div className="category_content share3">Notion</div>
					<div className="category_content share4">Youtube</div>
				</div>
				<div className="catogory_one_box category_education">
					<a className="category_title" href="#moveToEducation">
						Education
					</a>
					<div className="category_content education1">대학교</div>
					{/* <div className="category_content education2">부캠? 우테코? </div> */}
				</div>
				<div className="category_study catogory_one_box">
					<a className="category_title" href="#moveToStudy">
						Study
					</a>
					<div className="category_content study1">신입생 멘토링 스터디</div>
					<div className="category_content study2">파이썬 알고리즘 스터디</div>
					<div className="category_content study3">Web Front 발표 스터디</div>
					<div className="category_content study4">CS 발표 스터디</div>
				</div>
				<div className="category_read catogory_one_box">
					<a className="category_title" href="#moveToRead">
						Read
					</a>
					<div className="category_content read1">모던 자바스크립트 Deep Dive</div>
					<div className="category_content read2">Do it 리액트 프로그래밍 정석</div>
					<div className="category_content read3">프론트엔드 웹 디자인 입문</div>
				</div>
			</div>
		</>
	);
}
export default Navcategory;
