import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/Button';

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
  const { navigate } = useNavigation();

  const [startDate, setStartDate] = useState('16 Julho 2020');
  const [endDate, setEndDate] = useState('20 Julho 2020');

  const handleConfirmButton = useCallback(() => {
    navigate('VehiclesList');
  }, []);

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

      <Button 
        text="Confirmar"
        enable={true}
        onPress={handleConfirmButton}
      />
    </Container>
  );
};

export default SelectPeriod;
