import styled from '@emotion/styled';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
  color: white;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
// eslint-disable-next-line react-refresh/only-export-components
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  border: none;
`

function useSelectCurrency(label, options) {

    const [state,setState] = useState('');

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state}
        onChange={ e => setState(e.target.value)}
      >
        <option></option>
        {/* itirate on the options which is an  array with currencys*/}
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectCurrency];
}

export default useSelectCurrency;
