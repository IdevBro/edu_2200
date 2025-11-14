import React from 'react'
import CourseOpenCardRow from './CourseOpenCardRow'

function CourseOpenCard({ id, job }) {
    return (
        <div className='w-[783px] h-[698px] bg-white p-[50px]'>
            <p className='text-[80px] font-bold ml-[580px]'>{id}</p>
            <p className='text-[24px] font-semibold mt-[50px] mb-[30px]'>{job}</p>
            <CourseOpenCardRow
                course="Understanding Web Design Principles"
                id="Lesson 01"
                time="45minutes"
            />
            <CourseOpenCardRow
                course="Importance of User-Centered Design"
                id="Lesson 02"
                time="1 Hour"
            />
            <CourseOpenCardRow
                course="The Role of UI/UX Design in Product Development"
                id="Lesson 03"
                time="45minutes"
            />
        </div>
    )
}

export default CourseOpenCard
