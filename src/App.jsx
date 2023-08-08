import styled from "@emotion/styled";
import ImageCrypto from "./img/imagen-criptos.png";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto auto;
  }
`;

function App() {
  const [cripto, setCripto] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const quoteCrypto = async () => {

      if (!Object.keys(cripto).length) return;
      try {
        setLoading(true);


        const { cryptoCoin, coin } = cripto;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result.DISPLAY[cryptoCoin][coin]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    quoteCrypto();
  }, [cripto]);

  return (
    <Container>
      <Image src={ImageCrypto} alt="Image crypto" />
      <div>
        <Heading>Instant cryptocurrency trading</Heading>
        <Form setCripto={setCripto} />
        {loading && <Spinner />}
        {result.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
}

export default App;
