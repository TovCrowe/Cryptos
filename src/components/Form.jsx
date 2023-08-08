import React from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { currency } from "../data/currencys";
import { useEffect, useState } from "react";
import Error from "./Error";

//style components
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  margin-top: 30px;
  transition: background-color 0.3s ease;
  &:hover {
    background-attachment: #7a7dfe;
    cursor: pointer;
  }
`;

function Form({ setCripto }) {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [coin, SelectCurrency] = useSelectCurrency(
    "Chose your Currency",
    currency
  );
  const [cryptoCoin, SelectCryptocoin] = useSelectCurrency(
    "Chose your Cryptocoin",
    cryptos
  );
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCryptos = result.Data.map((crypt) => {
        const object = {
          id: crypt.CoinInfo.Name,
          name: crypt.CoinInfo.FullName,
        };
        return object;
      });
      setCryptos(arrayCryptos);
    };
    consultAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptoCoin].includes("")) {
      setError(true);
    } else {
      setError(false);
      setCripto({ cryptoCoin, coin });
    }
  };

  return (
    <>
      {error && <Error>All fields are required </Error>}

      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptocoin />
        <InputSubmit type="submit" value="Check" />
      </form>
    </>
  );
}

export default Form;
