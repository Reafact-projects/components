import React from 'react';
import styled from 'styled-components';

const PhraseWrapper = styled.div`
  font-size: 62.53px; /* Adjust based on your needs */
  font:Poppins
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const BlackText = styled.span`

  color: black;
`;

const RedText = styled.span`
  color: red;
  font-weight: bold;
`;

const MenuTitle = ({ ph1, ph2 }) => {
  return (
    <PhraseWrapper>
      <BlackText>{ph1} </BlackText>
      <RedText>{ph2}</RedText>
    </PhraseWrapper>
  );
};

export default MenuTitle;
