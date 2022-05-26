import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
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
`;

export const InfoText = styled.span`
  //  color: #6f6f79;
  color: #525252; 
    font-size: 2em;
    margin-left: auto;
    float: right;
    display: flex;
    padding-right: 2vw; 
`;

export const SmInfoText = styled.span`
  //  color: #6f6f79;
  color: #525252; 
    display: flex;
`;

/*
const StyledHome = styled.div`
  justify-content: center;


const StyledAboutDiv = styled.div`


    justify-content: center;
   
 
   

   //border: 10px solid purple;
`;

const StyledProjectDiv = styled.div`


    justify-content: space-around;

  
`;

const StyledContactDiv = styled.div`
  


       justify-content: space-around;


`; */



export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
   width: 100%;
 min-height: 60vh;
`;

export const Row = styled.div`
display: flex;
border: 3px solid purple;
width: 100%;
`

export const Column = styled.div`
flex: ${(props) => props.size};
`;


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
