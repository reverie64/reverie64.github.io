import styled from 'styled-components'
import  EmptyBar  from "../images/EmptyBar.svg"
import { ReactComponent as HpBar } from "../images/HpBar.svg"
import { ReactComponent as MpBar } from "../images/MpBar.svg"

/*
export const HpBar = () => {
    
}*/

/* 
update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?) with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>
*/



const StyledBars = styled.div`

width: 175px;
`



const Bars = () => {

    return (
       
        <>
         <StyledBars>
HP: <HpBar /> 90/120   
MP: <MpBar /> 18/24

         </StyledBars>
        
    
        </>
  
    );
};

export default Bars;
