import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    
  }
  @media screen and (max-width: 800px) {
    width: min-content;
    font-size: 10px
  }
`;


const invertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
    background-color: black;
    color: white;
    border: none;
}
`;

const googleSignInStyles = css`
background-color: #4285f4;
color: white;
border: none;

&:hover {
    background-color: #357ae8;
    border: none;
}
@media screen and (max-width: 800px) {
  font-size: 10px
}

`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  @media screen and (max-width: 800px) { 
   padding: 0;
  }
  
  ${getButtonStyles}
`;
