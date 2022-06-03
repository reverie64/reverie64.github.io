import styled, { css } from "styled-components";

import { ReactComponent as HtmlB } from "./assets/HtmlB.svg";
import { ReactComponent as ReactB} from "./assets/ReactB.svg";
import { ReactComponent as JsB } from "./assets/JsB.svg";
import { ReactComponent as CssB} from "./assets/CssB.svg";
import { ReactComponent as GitB} from "./assets/GitB.svg";
import { ReactComponent as LinuxB} from "./assets/LinuxB.svg";
import { ReactComponent as ScB} from "./assets/ScB.svg";
/*
const svgStyles = ({ color }) => {
    return css``;
};

const StyledHpBar = styled(HpBar).attrs(() => ({
    className: "fill",
}))`
    ${(props) => svgStyles(props)};
    display: flex;

`;

*/

const StyledContainer = styled.div`
   display: flex;
 
    justify-content: space-between;
    align-items: center;
// border: 5px solid pink;
 min-height: 6.5vh;
min-width: 30vh;
 h4 {
     letter-spacing: 0.2rem; //! M is hard to read. adjust font.
 }

`;

const StyledBadges = styled.ul`
     display: flex;
    //border: 1px solid black;
    min-width: 25vw;
    min-height: 20vh;
    flex-wrap: wrap;
    // justify-content: space-around;
    //align-items: space-around;
    border: 12px inset #dae7e4;
    background-color: #b5cfca;
    border-radius: 5px;
    //   outline: 1px solid #383838;
    //! background  corner cut out up left / bottom right
    padding: 0.5vh;
    //border-collapse: separate;
    li {
            min-height: 4rem;
    min-width: 4rem;
    display: flex;
 //   flex-grow: 1;

    padding: 0.5vh;
    }
`;

/*
const StyledIcon = styled.li`
  //  background-image: url(${(props) => props.data.img});
 //   background-repeat: no-repeat;
    //border: 4px outset #9787c1;
    // border: 7px groove #9787c1;
    //border: 7px ridge #e0e0e0;
    //border: 5px outset #3471ad;
    min-height: 4rem;
    min-width: 4rem;
    display: flex;
    flex-grow: 1;
*/
    /*
  
        min-height: 3rem;
        min-width: 3rem;
           height: 8vh;
          width: 8vw;
    

    }*/
//`;


const Badges = () => {




    return (



                    <StyledBadges>
             
                 <li>  <HtmlB  /> </li> 
  <li><ReactB /> </li>
   <li> <JsB  /></li>
   <li> <CssB  /></li>
   <li><GitB /></li>
  <li><LinuxB  /></li>
  <li><ScB /></li>
                    </StyledBadges>
        
    )
};

export default Badges;
