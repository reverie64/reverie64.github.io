import styled, { css } from "styled-components";

import { ReactComponent as HtmlB } from "./assets/HtmlB.svg";
import { ReactComponent as ReactB } from "./assets/ReactB.svg";
import { ReactComponent as JsB } from "./assets/JsB.svg";
import { ReactComponent as CssB } from "./assets/CssB.svg";
import { ReactComponent as GitB } from "./assets/GitB.svg";
import { ReactComponent as LinuxB } from "./assets/LinuxB.svg";
import { ReactComponent as ScB } from "./assets/ScB.svg";

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
*/

const StyledContainer = styled.div`
    display: flex;

    h4 {
        letter-spacing: 0.2rem;
    }

    /*.ab{
 display: flex;
        flex-direction: column;
 }*/
 
`;

const StyledBadges = styled.ul`
    //! fix where size is calc to be perfect square.
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 23vw;
    min-height: 20vh;
    flex-wrap: wrap;
    border: 12px inset #dae7e4;
    background-color: #b5cfca; // desaturate 1 step more?
    border-radius: 5px;
    //  outline: 1px solid #383838;
    //! background  corner cut out up left / bottom right
    padding: 0.5vh;
    li {
        min-height: 4rem;
        min-width: 4rem;
        display: flex;
        //   flex-grow: 1;
        padding: 0.5vh;
    }
`;

const Badges = () => {
    return (
        <StyledContainer>
            <StyledBadges>
                <li>
                    {" "}
                    <HtmlB />{" "}
                </li>
                <li>
                    {" "}
                    <ReactB />{" "}
                </li>
                <li>
                    {" "}
                    <JsB />{" "}
                </li>
                <li>
                    {" "}
                    <CssB />{" "}
                </li>
                <li>
                    {" "}
                    <GitB />{" "}
                </li>
                <li>
                    {" "}
                    <LinuxB />{" "}
                </li>
                <li>
                    <ScB />{" "}
                </li>
            </StyledBadges>
        </StyledContainer>
    );
};

export default Badges;
