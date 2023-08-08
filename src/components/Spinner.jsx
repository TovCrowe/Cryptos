import React from 'react';
import '../styles/Spinner.css';
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

function Spinner() {
  return (
    <Container>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </Container>    
  );
}

export default Spinner;
