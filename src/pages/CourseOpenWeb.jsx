import React from 'react'
import CourseOpenCard from '../components/CourseOpenCard'
import FirstRow from '../components/FirstRow'
function CourseOpen() {
    return (
        <div>
            <FirstRow
                title="Web Design Fundamentals"
                text="Welcome to our Web Design Fundamentals! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
            />
            <iframe className='mt-[100px] ml-[162px]' width="1596" height="790" src="https://www.youtube.com/embed/zOjov-2OZ0E" title="Introduction to Programming and Computer Science - Full Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <div className='mt-[100px] flex flex-wrap gap-[30px] ml-[162px]'>
                <CourseOpenCard
                    id="01"
                    job="Introduction to Web Design"
                />
                <CourseOpenCard
                    id="02"
                    job="User Research and Analysis"
                />
                <CourseOpenCard
                    id="03"
                    job="Wireframing and Prototyping"
                />
                <CourseOpenCard
                    id="04"
                    job="Visual Design and Branding"
                />
                <CourseOpenCard
                    id="05"
                    job="Usability Testing and Iteration"
                />
            </div>
        </div>
    )
}

export default CourseOpen
