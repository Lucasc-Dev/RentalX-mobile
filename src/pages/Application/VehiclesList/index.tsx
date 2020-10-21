import React, { useState } from 'react';

import { 
  Container,
  Header,
  DateContainer,
  DateField,
  ChevronIcon,
  DateFieldTitle,
  DateFieldInfo,
} from './styles';

const VehiclesList: React.FC = () => {
  const [startDate, setStartDate] = useState('16 Julho 2020');
  const [endDate, setEndDate] = useState('20 Julho 2020');

  return (
    <Container>
      <Header>
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInfo>{startDate}</DateFieldInfo>
          </DateField>

          <ChevronIcon name="chevron-down" size={20} color="#7a7a80" />

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInfo>{endDate}</DateFieldInfo>
          </DateField>
        </DateContainer>
      </Header>
    </Container>
  );
};

export default VehiclesList;
