import React from 'react'
import FirstRow from '../components/FirstRow'
import Panel from '../components/Panel'
import Cont1 from "../assets/Cont1.png"
import Cont2 from "../assets/Cont2.png"
import Cont3 from "../assets/Cont3.png"
import Cont4 from "../assets/Cont4.png"
import Cont5 from "../assets/Cont5.png"
import imgRow1 from "../assets/ImgRow1.png"
import imgRow2 from "../assets/ImgRow2.png"
import imgRow3 from "../assets/ImgRow3.png"
import imgRow4 from "../assets/ImgRow4.png"
import imgRow5 from "../assets/ImgRow5.png"
import { Link } from 'react-router-dom'

function Courses() {
    return (
        <div>
            <FirstRow
                title="Online Courses on Design and Development"
                text="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey." />
            <Panel
                job="Web Design Fundamentals"
                more="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                img1={imgRow1}
                img2={Cont1}
                weeks="4 Weeks"
                level="Beginner"
                name="By John Smith"
                viewBtn={<Link to="/viewWeb">View Course</Link>}
            />
            <Panel
                job="UI/UX Design"
                more="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
                img1={imgRow2}
                img2={Cont2}
                weeks="6 Weeks"
                level="Intermediate"
                name="By Emily Johnson"
                viewBtn={<Link to="/viewUX">View Course</Link>}
            />
            <Panel
                job="Mobile App Development"
                more="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
                img1={imgRow3}
                img2={Cont3}
                weeks="8 Weeks"
                level="Intermediate"
                name="By David Brown"
                viewBtn={<Link to="/viewApp">View Course</Link>}
            />
            <Panel
                job="Graphic Design for Beginners"
                more="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
                img1={imgRow4}
                img2={Cont4}
                weeks="10 Weeks"
                level="Beginner"
                name="By Sarah Thompson"
                viewBtn={<Link to="/viewGraphic">View Course</Link>}
            />
            <Panel
                job="Front-End Web Development"
                more="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                img1={imgRow5}
                img2={Cont5}
                weeks="10 Weeks"
                level="Intermediate"
                name="By Michael Adams"
                viewBtn={<Link to="/viewFront">View Course</Link>}
            />
        </div>
    )
}

export default Courses
