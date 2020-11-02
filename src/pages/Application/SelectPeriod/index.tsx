import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PeriodContext } from '../../../hooks/PeriodContext';
import { convert } from '../../../utils/ConvertMonth';

import Button from '../../../components/Button';
import Calendar from '../../../components/Calendar';

import arrowIcon from '../../../assets/icons/RightArrow.png';

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

interface Period {
  start_date: Date | undefined;
  end_date: Date | undefined;
}

const SelectPeriod: React.FC = () => {
  const { navigate } = useNavigation();
  const { definePeriod } = useContext(PeriodContext);

  const [period, setPeriod] = useState<Period>({} as Period);

  const handleConfirmButton = useCallback(() => {
    if (period) {
      definePeriod(period);
  
      navigate('VehiclesList');
    }
  }, []);

  const convertStartDate = useMemo(() => {
    console.log(period)
    if (period.start_date) {
      const month = convert(period.start_date.getMonth());
  
      return `${period.start_date.getDate()} ${month} ${period.start_date.getFullYear()}`;
    }
  }, [period]);

  const convertEndDate = useMemo(() => {
    console.log(period)
    if (period.end_date) {
      const month = convert(period.end_date.getMonth());
  
      return `${period.end_date.getDate()} ${month} ${period.end_date.getFullYear()}`;
    }
  }, [period]);

  return (
    <Container>
      <Details>
        <Title>Escolha a data e encontre um carro.</Title>
        
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInput>{convertStartDate}</DateFieldInput>
          </DateField>

          <ArrowIcon source={arrowIcon} />

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInput>{convertEndDate}</DateFieldInput>
          </DateField>
        </DateContainer>
      </Details>

      <Calendar 
        onChangeDate={(period) => setPeriod(period)}
      />

      <Button 
        text="Confirmar"
        enable={true}
        onPress={handleConfirmButton}
      />
    </Container>
  );
};

export default SelectPeriod;
