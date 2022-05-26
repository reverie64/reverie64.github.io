import styled, { css } from "styled-components";
//import { ReactComponent as EmptyBar } from "../images/EmptyBar.svg";
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
    flex-direction: row;
`;

export const StyledMpBar = styled(MpBar).attrs(() => ({
    className: "fill",
}))`
    ${(props) => svgStyles(props)};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

/* 
remove outside container from all but one of the bars.


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


*/

const StyledContainer = styled.div`
    //display: inline-block;

    display: flex;
    flex-direction: column;
   // justify-content: space-around;
 //   align-items: space-around;
 border: 5px solid pink;
`;


const StyledBars = styled.div`
    //display: inline-block;

    display: flex;
    flex-direction: column;
   // justify-content: space-around;
 //   align-items: space-around;
 border: 1px solid black;
 min-height: 20vh;
 min-width: 15vh;
`;

const Bars = () => {
    let maxHp = 120;
    let maxMp = 24;
    // let currentHp;
    // let currentMp;

    const updateHp = () => {
        let currentHp = maxHp - 10;
        return `${currentHp} / ${maxHp}`;
    };

    const updateMp = () => {
        let currentMp = maxMp - 5;
        return `${currentMp} / ${maxMp}`;
    };

/*
setInterval(), set state , Date.now(), num 
*/



    return (
        <StyledBars>
        <StyledContainer> 
                <h4>HP: </h4> <StyledHpBar /> {updateHp()}
        </StyledContainer>
          
      <StyledContainer>
             <h4>MP: </h4> <StyledMpBar /> <span> {updateMp()}</span>
      </StyledContainer>
        
        </StyledBars>
    );
};

export default Bars;
