//import { useState } from "react";
//! container should be same size for each page
//! check on responsiveness - need media q's?, text size nneds to adapt
//! finalize color
//! finalize svgs : color, optimize
//! check out pixel borders with css
//! finalize text
//! keep on gh pages or change ? change back to hashrouter if keeping.
// deploy ... profit (:

import styled from "styled-components";

import Bars from "../Bars/Bars";
import { Main, Row, Column, InfoText, SmInfoText } from "../../theme";
import Badges from "./Badges";
import testpic from "../../assets/testpic.png"







/*  
flex: 1 1 auto;
overflow: auto;

   background-image: url(${Section});  
      {data.map(({ id, title, link }) => (
                        
                                <img key={id} src={require(`./data/${link}.svg`)} alt={title} />
                       
                        ))}
*/

const TitleRow = styled(Row)`
    //justify-content: space-between;
    align-items: flex-start;
`;
const TopCol = styled(Column)`
   // justify-content: space-around;
   // align-items: flex-start;
`;


const TopRow = styled(Row)`
    justify-content: space-around;
    align-items: flex-start;
`;

const MiddleRow = styled(Row)`
    justify-content: space-around;
`;

const BottomRow = styled(Row)`
    .ab {
        display: flex;
        flex-direction: column;
    }
`;

const StyledHome = styled(Main)`
    justify-content: flex-start;
`;

const StyledName = styled.div`
    text-shadow: 4px 4px 0 #f8f2f6;
    font-size: 1.6rem;
    font-weight: bold;
    padding-right: 3vw;
`;

 const XSmInfoText = styled(SmInfoText)`
    //  color: #6f6f79;
    color: #525252;
    display: flex;
    font-size: 0.9rem;
`;

//! for image placeholder
const StyledImg = styled.div`
//background-image: url(${testpic});
//background-repeat: no-repeat;
    display: flex;
flex-direction: column;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
        height: 20vh;
        width: 12vw;
    //   min-height: 20vh;
  //  min-width: 20vw;
 //   flex-grow: 1;
 justify-content: center;
        align-items: center;
 img{
    
    height: 80%;
    //  width: auto;
 }
`;

 const StyledLevel = styled.div`
        display: flex;
       // font-size: 1.75rem;
      //  font-weight: bold;

    `;

const StyledBasicInfo = styled.ul` //! 
    display: flex;
 //   flex-direction: column;
    //  justify-content: center;
  // align-items: center;
       height: 15vh;
        width: 15vw;
   border: 10px ridge #9787c1;
  flex-wrap: wrap;
`;

/*
const Level = styled.div`
    font-size: 1.75rem;
    font-weight: bold;*/




const StyledEnd = styled.div`
    display: flex;
    flex-direction: column;
      padding-left: 1.5vw;
    // flex-grow: 1;

    /* 
    //border: 1px solid black;
    min-width: 25vw;
    min-height: 20vh;
    flex-wrap: wrap;
    // justify-content: space-around;
    //align-items: space-around;
   
    border-radius: 5px;

  
    padding: 0.5vh;
    */ 
`;

/* 

  {data.map((id, img, title) => {
                            return (
                                <img
                                    key={id}
                                    src={require(`${img}`)}
                                    alt={title}
                                ></img>
                            );
                        })}


update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?)cursor or button on top? - with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>

        blurb: what i do, character quote/ summary/ what
                charc is good at ?
}
       bottom of page:   move some of about section here - pinned achv?
*/

const Home = () => {

/*
        const findLevel = (birthYear) => {
            birthYear = 1989;
            let date = new Date();
            //let birthday = new Date(birthYear);
            let age = date.getFullYear() - birthYear;
            //birthday.getFullYear();
            setLevel(age)
            return level;
        };
    */


    return (
        <StyledHome>

<TopCol>    </TopCol>


          <TitleRow>  <StyledName>Kristin </StyledName> <InfoText>character overview</InfoText></TitleRow>
            <TopRow>
                 <StyledImg> <img src={testpic} /> <StyledLevel> lvl. 32 </StyledLevel></StyledImg>
                <Bars />
                
            </TopRow>
            <MiddleRow>
             

                <StyledBasicInfo>
                    <li><XSmInfoText>class:</XSmInfoText>
                        software developer
                    </li>
                    <li>
                        <XSmInfoText>specialty:</XSmInfoText>front end
                    </li>
                    <li>
                        {" "}
                        <XSmInfoText>pronouns:</XSmInfoText>she/ her
                    </li>
                </StyledBasicInfo>
            </MiddleRow>
            <BottomRow>
                <div className="ab">
                    <SmInfoText>Abilities:</SmInfoText>
<Badges />
                </div>

                <StyledEnd>
                    <SmInfoText>strengths:</SmInfoText>
                    <ul>
                       <li> Conjuring human friendly web apps </li> 
                       <li> clean, easy to navigate layouts </li>
                       <li> improved web interactivity  </li>
                        <li> readable code </li>
                        <li> creativity </li>
                        <li> always learning </li>
               
                    </ul>
                </StyledEnd>
            </BottomRow>
        </StyledHome>
    );
};

export default Home;
