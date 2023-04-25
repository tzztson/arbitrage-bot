import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

const About = () => {

    const { darkMode } = useContext(DarkContext);

    return (
        <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 shadow-lg`}>
            <div className="grid py-12">
                <div className="flex-[1_1_60%]">
                    <p className="font-black text-4xl max-sm:text-3xl max-sm:leading-[48px] leading-[60px]">Hi, I'm Hu Zheng, <br /> I'm a Full ( Stack | Time ) Developer </p>
                </div>
                <div className="flex-[1_1_40%]">

                </div>
            </div>
        </div>
    )
}

export default About;