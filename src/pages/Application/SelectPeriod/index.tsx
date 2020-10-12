import React, { useState } from 'react';

import arrowIcon from '../../../assets/icons/RightArrow.png';

import Calendar from '../../../components/Calendar';

import { 
  Container,
  Details,
  Title,
  DateContainer,
  DateField,
  DateFieldTitle,
  DateFieldInput,
  ArrowIcon,
} from './styles';

const SelectPeriod: React.FC = () => {
  const [startDate, setStartDate] = useState('16 Julho 2020');
  const [endDate, setEndDate] = useState('20 Julho 2020');

  return (
    <Container>
      <Details>
        <Title>Escolha a data e encontre um carro.</Title>
        
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInput>{startDate}</DateFieldInput>
          </DateField>

          <ArrowIcon source={arrowIcon} />

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInput>{endDate}</DateFieldInput>
          </DateField>
        </DateContainer>
      </Details>

      <Calendar />
    </Container>
  );
};

export default SelectPeriod;
