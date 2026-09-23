import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, additionalSkills } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {additionalSkills && additionalSkills.length > 0 && (
        <div className='mt-16 flex flex-col items-center'>
          <p className='text-secondary text-[14px] uppercase tracking-wider mb-4 font-semibold'>
            Also Experienced With
          </p>
          <div className='flex flex-wrap justify-center gap-3 max-w-3xl'>
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className='bg-tertiary text-white-100 text-[14px] py-1.5 px-4 rounded-full border border-secondary/20 hover:border-[#915EFF] transition-colors'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
