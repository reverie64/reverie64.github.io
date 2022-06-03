import { useState } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as HpBar } from "../Bars/HpBar.svg";
import { ReactComponent as MpBar } from "../Bars/MpBar.svg";

const svgStyles = ({ color }) => {
    return css``;
};

const StyledHpBar = styled(HpBar).attrs(() => ({
    
    className: "fill",
}))`
    ${(props) => svgStyles(props)};
    display: flex;
     padding-left: .5vw;
  padding-right: .5vw;
  min-width: 15vw;
  min-height: 3vh;
`;

export const StyledMpBar = styled(MpBar).attrs(() => ({
    className: "fill",
}))`
    ${(props) => svgStyles(props)};
    display: flex;
      padding-left: .5vw;
      padding-right: .5vw;
      min-width: 15vw;
        min-height: 3vh;
`;

/* 
remove outside container from one of the bars.


update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?) with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>

take full hp 100% = 32 pixels
take time, set interval for every 30 minutes 
decrease hp by % on each interval 

for each decrease, remove colored fill.
update with empty/ black fill 


<!--
import * as React from "react"

const HpBar = (props) => (
  <svg> </svg>
  )
export default HpBar
-->
<!-- fill{...props}  --> 

*/


const StyledBars = styled.div`
    display: flex;
    flex-direction: column;
  font-size: 0.9rem;
   // justify-content: space-around;
 //   align-items: space-around;
 //border: 1px solid black;
// min-height: 20vh;
 //min-width: 15vh;
`;

const StyledContainer = styled.div`
   display: flex;
 
    //justify-content: space-between;
    align-items: center;
 //border: 5px solid pink;



 h4 {
     letter-spacing: 0.1rem;
 }

.num {
min-width: 5em;

}

`;





const Bars = () => {
  //  const [value, setValue] = useState();
   // let hour = Date.now().getHours()
// change fill to 383838 



    let maxHp = 120;
    let maxMp = 24;
    // let currentHp;
    // let currentMp;

    const updateHp = () => {
        let currentHp = maxHp - 10;
        return `${currentHp}/${maxHp}`;
    };

    const updateMp = () => {
        let currentMp = maxMp - 5;
        return `${currentMp}/${maxMp}`;
    };



/*
setInterval(), set state , Date.now(), num 
replace class fill over the course of the daytime hours with black, 
reverse it at night
*/



    return (
        <StyledBars>
        <StyledContainer> 
                <h4>HP</h4> <StyledHpBar />  <span className="num"> {updateHp()}</span>
        </StyledContainer>
          
      <StyledContainer>
             <h4>MP</h4> <StyledMpBar /> <span className="num"> {updateMp()}</span>
      </StyledContainer>
        
        </StyledBars>
    );
};

export default Bars;
