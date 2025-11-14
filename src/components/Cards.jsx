import React from 'react'
import ImageOne from "../assets/Image1.png"
import ImageTwo from "../assets/Image2.png";
import ImageThree from "../assets/Image3.png";
import ImageFour from "../assets/Image4.png";
import ImageFive from "../assets/Image5.png";
import ImageSix from "../assets/Image6.png";
import Card from './Card';

function Cards() {
    return (
        <div className="flex flex-wrap ml-[161px] gap-[30px] mt-[80px]">
            <Card image={ImageOne}
                number="4 Weeks"
                degree="Beginner"
                person="By John Smith"
                work="Web Design Fundamentals"
                text="Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create visually
                appealing and user-friendly websites."
            />
            <Card image={ImageTwo}
                number="6 Weeks"
                degree="Intermediate"
                person="By Emily Jhonson"
                work="UI/UX Design"
                text="Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites."
            />
            <Card image={ImageThree}
                number="8 Weeks"
                degree="Intermediate"
                person="By David Brown"
                work="Mobile App Development"
                text="Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites."
            />
            <Card image={ImageFour}
                number="10 Weeks"
                degree="Beginner"
                person="By Sarah Thompson"
                work="Graphic Design for Beginners"
                text="Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites."
            />
            <Card image={ImageFive}
                number="10 Weeks"
                degree="Intermediate"
                person="By Michael Adams"
                work="Front-End Web Development"
                text="Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create visually
                appealing and user-friendly websites."
            />
            <Card image={ImageSix}
                number="6 Weeks"
                degree="Advance"
                person="By Jennifer Wilson"
                work="Advanced JavaScript"
                text="Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create visually
                appealing and user-friendly websites."
            />

        </div>
    )
}

export default Cards
