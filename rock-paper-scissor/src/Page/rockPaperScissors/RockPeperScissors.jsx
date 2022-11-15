import React, { useState } from "react";
import { FooterRocksPaperScissors } from "../../components/footerPlays/footerRocksPaperScissors/FooterRocksPaperScissors";
import { HeaderRockPaperScissorts } from "../../components/headerPlays/headerRockPaperScissors/HeaderRockPaperScissorts";
import { RulesRocksPaperScissors } from "../../components/rules/rulesRocksPaperScissors/RulesRocksPaperScissors";
import { SectionRockPaperScissors } from "../../components/sectionsPlays/sectionRockPaperScissors/SectionRockPaperScissors";
import { PlayProvider } from "../../context/context.jsx";

import "../generalStylePages/generalStylePages.css";
import "./RockPeperScissors.css";

export const RockPeperScissors = () => {
  const [addClass, setAddClass] = useState("");

  return (
    <section className={`sectionPages rockPeperScissors`}>
      <PlayProvider>
        <div className={addClass && "active-blur"}>
          <HeaderRockPaperScissorts />
          <div>
            <SectionRockPaperScissors />
          </div>
          <FooterRocksPaperScissors setAddClass={setAddClass} />
          {/* <RulesRocksPaperScissors /> */}
        </div>
        {addClass && <RulesRocksPaperScissors setAddClass={setAddClass} />}
      </PlayProvider>
    </section>
  );
};
