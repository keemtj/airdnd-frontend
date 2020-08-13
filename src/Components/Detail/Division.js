import React from 'react';
import styled from 'styled-components';

const Division = ({ children, title, border }) => {
  console.log(title);
  return (
    <StDivision border={border}>
      {title && <h3>{title}</h3>}
      {children}
    </StDivision>
  );
};

const StDivision = styled.div`
  padding: 48px 0;
  border-bottom: ${props => props.border || '1px solid #ddd'};
  background-color: #fff;

  h3 {
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

export default Division;