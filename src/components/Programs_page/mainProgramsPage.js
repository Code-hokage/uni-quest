
import React from 'react';
import ProgramsFilter from "./programsFilter";
import AllPrograms from "./allPrograms";
import StickyBox from "react-sticky-box";

// Programs component to render the recommended programs section
const Programs = () => {

    return (
        <>
            {/* Title section for the recommended programs */}
            <div className="programstitle">
                <h2>Recommended programs</h2>
            </div>

            {/* Main container for the recommended programs section */}
            <div className="progMain row">

                {/* StickyBox component to make the ProgramsFilter component sticky */}
                <StickyBox offsetTop={0} offsetBottom={0}>
                    <ProgramsFilter />
                </StickyBox>

                {/* AllPrograms component to render all the programs */}
                <AllPrograms />
            </div>
        </>

    );
}

export default Programs;
//
//In this code, we have a `Programs` component that renders the recommended programs section. It consists of a title section, a main container, and a sticky filter component. The `ProgramsFilter` component is wrapped inside the `StickyBox` component to make it sticky. The `AllPrograms` component is used to render all the programs..</s>