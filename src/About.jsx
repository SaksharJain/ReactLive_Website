import React from "react";
import web from "../src/images/img9.jpg";
import Common from "./Common";

const About=()=>{
    return (
        <>
           <Common name="Welcome to About" 
           imgsrc={web} 
           visit="/contact"
           btname="Contact now"
           />
        </>
    );
};
export default About;