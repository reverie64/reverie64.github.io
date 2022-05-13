import Section from "./images/Section.svg";

import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`


* {
  margin: 0;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size:1.25rem;
    font-family: "Recursive", monospace;
    box-sizing: border-box;
    
  }

  .container {
    /* 
    background-color: #c2b7df;
    border-radius: 10px 10px;
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;  */
    margin-left: auto;
    margin-right: auto;
    /* box-shadow: 4px 5px 0px 0px #383838;*/
}



h2 {
    text-shadow: 4px 4px 0 #f8f2f6;
}

h1 {
  display: flex;
justify-content: center;
align-items: center;       
 height: 10vh;
 width: 10vh;
 background-image: url(${Section});
background-repeat: no-repeat;


    text-shadow: 4px 4px 0 #f8f2f6;
    text-align: center;
    //  border: 2px solid #383838;
    // border-radius: 10px 10px;
    // background-color: rgba(180, 153, 180, 0.479);
    padding: 4vh;
}
  
li {
  list-style: none;
}
  button {
    cursor: pointer;
    border-radius: 10px 10px;
    background-color: #d2a5b1;
    border: 2px solid #383838;
    height: 7vh;
    width: 12vh;
    font-size: 1.25em;
    display: none;
}

  a {
    text-decoration: none;
}
a:link {
    color: black;
}
a:visited {
    color: black;
}


.info-text {
color: #6f6f79;
}


.link {
    cursor: pointer;
  
}

.link:hover {
    color: #fec7d7;
    text-shadow: 0 0 15px #fec7d7;
    transition: all 0.5s ease;
    transform: scale(1.5);
    background-color: #383838;
    border-radius: 30px 30px;
}

.content {
    display: flex;
    flex-direction: column;
}




`;

export const lightTheme = {
    body: "#d9d4e7",
    text: "#383838",
};

export const darkTheme = {
    body: "#68657a",
    text: "#f5ebdd",
};
