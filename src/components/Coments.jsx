import React from 'react'
import Coment from './Coment'
import ProfileOne from "../assets/Profile1.png";
import ProfileTwo from "../assets/Profile2.png";
import ProfileThree from "../assets/Profile3.png";
import ProfileFour from "../assets/Profile4.png";

function Coments() {
    return (
        <div className="flex flex-wrap justify-center mt-[80px] gap-[30px]">
            <Coment comment="The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the interactive
                learning environment was engaging. I highly recommend it!"
                img={ProfileOne}
                name="Sarah L"
            />
            <Coment comment="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
                img={ProfileTwo}
                name="Jason M"
            />
            <Coment comment="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
                img={ProfileThree}
                name="Emily R"
            />
            <Coment comment="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
                img={ProfileFour}
                name="Michael K"
            />
        </div >
    )
}

export default Coments
