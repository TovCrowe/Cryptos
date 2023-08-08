/* eslint-disable react/prop-types */
import React from 'react'
import styled from "@emotion/styled";


const Text = styled.div`
background-color: #b7322c;
color: white;
padding: 15px;
text-transform: uppercase;
font-family: 'lato', 'sans-serif';
text-align: center;
`

function Error({children}) {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error