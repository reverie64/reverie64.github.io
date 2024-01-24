import styled from "styled-components";

// later achievement unlocked - epic failure haha

const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
`;

const NotFound = () => {
    return (
        <StyledNotFound>
            <h1> 404</h1>
            <div className="content">
                so take the game cartridge out, blow in it and put it back in.
                that always works! okay? you should be able to turn it back on
                now...
            </div>
        </StyledNotFound>
    );
};

export default NotFound;
