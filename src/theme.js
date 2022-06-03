import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import BG from "./assets/BG.svg";
//import Cursor from "/Cursor.svg"
import testpic from "./assets/testpic.png"

export const GlobalStyles = createGlobalStyle`



* {
  margin: 0;
  box-sizing: border-box;
///z-index: 9999;

}


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size: 1.0 rem;
   // font-family: 'VT323' "Recursive", monospace;
 font-family: 'Press Start 2P', monospace;
      display: flex;
      align-items: center;
      justify-content: center;

 
  }


li {
  list-style: none;
}

a, button {
    text-decoration: none;

    &:link {
    color: black;
}

&:visited {
    color: black;
}
&:hover { //! not working
    cursor: pointer;
}

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

::-webkit-scrollbar-button:vertical:start:increment,
::-webkit-scrollbar-button:vertical:end:decrement,
::-webkit-scrollbar-button:horizontal:start:increment, 
::-webkit-scrollbar-button:horizontal:end:decrement 
{
    display: none;
}

`;

export const InfoText = styled.span`
    color: #525252;
     //  color: #6f6f79;
    font-size: 1.3rem;
    margin-left: auto;
    float: right;
    display: flex;
    padding-right: 2vw;
`;


export const SubHead = styled.h2`
    //  color: #6f6f79;
    color: #525252;
    display: flex;
    font-size: 1.3rem;
  //  font-weight: 
`;

export const SmInfoText = styled.span`
    //  color: #6f6f79;
    color: #525252;
    display: flex;
    font-size: 1.1rem;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    min-height: 60vh;
`;

export const Row = styled.div`
    display: flex;
   // border: 3px solid purple;
    width: 100%;
        padding: 0.5vh;
       align-items: center;
`;

export const Column = styled.div`
  //  flex: ${(props) => props.size};
display: flex;
    border: 3px solid purple;
    height: 100%;
        padding: 0.5vh;
       align-items: center;


`;


export const StyledPl = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;

export const StyledProject = styled.div`
    //!unsure about layout. , links arent working
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: space-around;
    width: 50%;
        border: 7px inset #dae7e4;
    background-color: #b5cfca;
    outline: 5px inset #dae7e4;
    margin-right: 1vw;
    padding: 0.5vh;
  
`;

/* "#f5ebdd", linen
     "#d9d4e7",  ??? 
     "#eed7c7" random site
     
   current cream color 5/22 "#f5ebdd"  
     
     */

export const lightTheme = {
  colors: {
    mainText: "#383838",
    windowBackground: "#e5e3e8",
    hostile: "red"
  },
    body: "#e5e3e8",
    text: "#383838",
};

export const darkTheme = {
    body: "#68657a",
    text: "#f5ebdd",
};
