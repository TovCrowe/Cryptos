import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  color: white;
  font-family: "Lato", "sans-serif";
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Img = styled.img`
display: block;
width: 128px;
margin-right: 20px;
`;

function Result({ result }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto" />
      <div>
      <Price>
        Price: <span> {PRICE} </span>
      </Price>
      <Text>
        Last Update: <span>{LASTUPDATE}</span>
      </Text>

      <Text>
        High Day: <span>{HIGHDAY}</span>
      </Text>
      <Text>
        Low Day: <span>{LOWDAY}</span>
      </Text>
      <Text>
        Change: <span>{CHANGEPCT24HOUR}</span>
      </Text>
      </div>
    </Container>
  );
}

export default Result;
