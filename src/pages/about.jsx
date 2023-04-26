import { useContext } from "react";

import { DarkContext } from "../context/darkThemeContext";
import ProgressBar from "../component/progressBar";

const About = () => {
  const { darkMode } = useContext(DarkContext);

  return (
    <div
      className={`container-${darkMode} text-${darkMode} container mx-auto px-12 max-sm:px-6 py-4 shadow-lg`}
    >
      <div className="grid py-6">
        <div className="flex-[1_1_60%]">
          <p className="font-black text-4xl max-sm:text-3xl max-sm:leading-[48px] leading-[60px]">
            Hi, I'm Hu Zheng, <br /> I'm a Full ( Stack | Time ) Developer{" "}
          </p>
        </div>
        <div className="flex-[1_1_40%]"></div>
      </div>
      <div className="py-6">
        <p className="text-2xl font-black">Skills</p>
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 py-6">
          <ProgressBar title="React/Next.js" size="100" />
          <ProgressBar title="Angular" size="90" />
          <ProgressBar title="JavaScript/TypeScript" size="100" />
          <ProgressBar title="CSS/SCSS" size="95" />
          <ProgressBar title="Styled-Component" size="80" />
          <ProgressBar title="Tailwind CSS/DaisyUI" size="100" />
          <ProgressBar title="Node.js" size="100" />
          <ProgressBar title="Express" size="90" />
          <ProgressBar title="MongoDB/MySQL" size="90" />
          <ProgressBar title="Python/Django" size="95" />
          <ProgressBar title="Go" size="85" />
          <ProgressBar title="Smart Contract" size="90" />
          <ProgressBar title="Web3.js/Ethers.js" size="100" />
          <ProgressBar title="NFT/NFT Marketplace" size="80" />
          <ProgressBar title="GitHub/GitLab" size="100" />
        </div>
      </div>
    </div>
  );
};

export default About;
