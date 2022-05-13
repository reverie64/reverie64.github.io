import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import EmptyIcon from "../images/EmptyIcon.svg";

import Bars from "./Bars";



const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
`;

const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 10vh;
    background-image: url(${EmptyIcon});
    background-repeat: no-repeat;
    .fa {
        height: 8vh;
        width: 8vh;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
`;

/* 
update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?) with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>

.home-content {
    display: flex;
}

.home-head-text {
    text-shadow: 4px 4px 0 #f5ebdd;
}

.home-img {
    background-color: #858585;
    width: 150px;
    height: 150px;

    border: 7px solid #383838;
    margin-bottom: 2vh;
}
*/

const Home = () => {
    return (
        <main className="container">
            <h1>Kristin </h1>

            <div className="home-content">
                <div className="home-img"></div>

                <ul className="overview">
                    <Bars />

                    <p className="info-text">character overview</p>

                    <li> class: software developer</li>
                    <li> specialty: front end </li>
                    <li> pronouns she/ her </li>

                    <StyledUl>
                        Special abilities/ abilities:
                        <li>
                            {" "}
                            <StyledIcon>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faReact}
                                    alt="React"
                                    title="React"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                        <li>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faJsSquare}
                                    alt="JavaScript"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                        <li>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    alt="HTML"
                                    className="fa"
                                />{" "}
                            </StyledIcon>{" "}
                        </li>{" "}
                        <li>
                            {" "}
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faCss3Alt}
                                    alt="CSS"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                        <li>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faGitSquare}
                                    alt="Git"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                        <li>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faLinux}
                                    alt="Linux"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                        <li>
                            {" "}
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faSpaghettiMonsterFlying}
                                    alt="Styled Components"
                                    className="fa"
                                />
                            </StyledIcon>
                        </li>
                    </StyledUl>
                </ul>
            </div>
            <h4> lvl 32 </h4>
            <div className="blurb">
                Conjuring human friendly web apps, simple and clean layouts that
                are easy to navigate, improved web interactivity, readable code.
                <br /> <br /> blurb: what i do, character quote/ summary/ what
                charc is good at ?
            </div>
        </main>
    );
};

export default Home;
