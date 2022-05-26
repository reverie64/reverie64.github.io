import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  box-sizing: border-box;

}


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size:1.5rem;
   // font-family: "Recursive", monospace;
    font-family: 'VT323', monospace;
      display: flex;
      align-items: center;
      justify-content: center;

  }


h1 {
text-shadow: 4px 4px 0 #f8f2f6;
}
  
li {
  list-style: none;
}

.link:hover {
    cursor: pointer;
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


    ::-webkit-scrollbar {
    width: 25px;
   // height: 5px;

  }

  ::-webkit-scrollbar-corner {
background: #c0c0c0;
  }

  ::-webkit-scrollbar-track {
  background: #c0c0c0;
    //border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
   	background-color: #c0c0c0;
	border-width: 1px;
	border-style: solid;
	border-color: #383838;
	border-top-color: #c0c0c0;
	border-left-color: #c0c0c0;
	box-shadow: inset 1px 1px #fff, inset -1px -1px #6e6e6e;
  }

::-webkit-scrollbar-button {  //!double buttons showing up after layout changes
height: 30px;
     	background-color: #c0c0c0;
	border-width: 1px;
	border-style: solid;
	border-color: #383838;
	border-top-color: #c0c0c0;
	border-left-color: #c0c0c0;
	box-shadow: inset 1px 1px #fff, inset -1px -1px #6e6e6e;
  &:active {
          border: 1px solid #6e6e6e;
          box-shadow: none;
}

}




  /*  

margin-left: auto;
margin-right: auto;
padding: 2rem;
display: flex; 
flex-wrap: wrap;
 min-height: 40rem;
min-width: 55rem;
margin-bottom: 2rem; */ 


/*
  .container {
    margin-left: auto;
margin-right: auto;
  display: flex;
  flex-wrap: wrap;
   min-height: 40rem;
min-width: 55rem;
justify-content: flex-start;
min-height: 60vh;
min-width: 75vw;
margin-bottom: 2rem;
padding: 1vh;
height: calc(70%);
 /width: calc(80%);
 /flex: 1 1 auto;
}

.content {
    display: flex;
   flex-wrap: wrap;
 flex-direction: row;
   /clear: left;
  /  min-height: 40vh;
/min-width: 55vw;
flex: 1 1 auto;
width: 100%;
height: 100%;
overflow: auto;
}       



.section {
  /! fix height and size responsive
         
 /min-height: calc(70%);
/ min-height: fit-content;
 /min-width: calc(80%);

background-repeat: no-repeat;
margin-left: auto;
margin-right: auto;
padding: 2rem;
display: flex; 
/flex-wrap: wrap;
/ min-height: 40rem;
/min-width: 55rem;
margin-bottom: 2rem;
}
*/
//`;

/* "#f5ebdd", linen
     "#d9d4e7",  ??? 
     "#eed7c7" random site
     
   current cream color 5/22 "#f5ebdd"  
     
     */

export const lightTheme = {
    body: "#e5e3e8",
    text: "#383838",
};

export const darkTheme = {
    body: "#68657a",
    text: "#f5ebdd",
};
