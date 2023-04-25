import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";

const HireMe = () => {

    const {darkMode} = useContext(DarkContext);

    return (
        <div className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 flex  shadow-lg`}>
            <p>Hire Me</p>
        </div>
    )
}

export default HireMe;