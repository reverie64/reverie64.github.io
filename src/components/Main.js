import React, { useState } from "react"
import { Link } from "react-router-dom";

const Main = ({ mailto, label }) => {
 
  const git = () =>    window.open("http://github.com/reverie64");
  const linkedin = () => window.open("www.linkedin.com/in/kristinharris64");

    return (
        <main>  
        <h1>Hi!</h1>
        <p>I'm Kristin and I'm a frontend developer. <br />
         Full site coming soon! <br />
         Visit my <button onClick={git}> github </button> or 
         find me on <button onClick={linkedin}>linkedin.</button>
        
         </p>
        </main>
    


    )


}

export default Main


         /* 
         
         , email me
         <Link
            to='kristinh889@gmail.com'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link> */