import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: blue;
    border: 1px solid black;
`

export const Button = () => {
    return (
        <StyledButton onClick={() => console.log('clicked')}>
            This is the button
        </StyledButton>
    )
}