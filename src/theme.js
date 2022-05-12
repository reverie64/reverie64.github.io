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

h2 {
    text-shadow: 4px 4px 0 #f8f2f6;
}
  

  button {
    cursor: pointer;
    border-radius: 10px 10px;
    background-color: #d2a5b1;
    border: 2px solid #383838;
    height: 10vh;
    width: 20vh;
    font-size: 1.25em;
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

`;

export const lightTheme = {
    body: "#d9d4e7",
    text: "#383838",
};

export const darkTheme = {
    body: "#68657a",
    text: "#f5ebdd",
};
