import React from 'react'
import Box from './Box'

function Boxes() {
    return (
        <div className="container mx-auto  flex flex-wrap mt-[80px] justify-center gap-[20px]">
            <Box
                number="01"
                title="Flexible Learning Schedule"
                text="Fit your coursework around your existing commitments and obligations."
            />
            <Box
                number="02"
                title="Expert Instruction"
                text="Learn from industry experts who have hands-on experience in design and development."
            />
            <Box
                number="03"
                title="Diverse Course Offerings"
                text="Explore a wide range of design and development courses covering various topics."
            />
            <Box
                number="04"
                title="Updated Curriculum"
                text="Access courses with up-to-date content reflecting the latest trends and industry practices."
            />
            <Box
                number="05"
                title="Practical Projects and Assignments"
                text="Develop a portfolio showcasing your skills and abilities to potential employers."
            />
            <Box
                number="06"
                title="Interactive Learning Environment"
                text="Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
            />
        </div>
    )
}

export default Boxes
