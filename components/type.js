import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Tallah Rana Backend Developer ",
                    "JaiKumar Frontend Developer",
                    "Md,Qasim Graphic Designer",
                    "Rana Nabeel Graphic Designer",
                    "Md Hamad Graphic Designer",

                ],

                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;