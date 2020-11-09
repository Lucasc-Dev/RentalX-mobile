import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePeriod } from '../../../hooks/PeriodContext';
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
  const { definePeriod } = usePeriod();

  const [period, setPeriod] = useState<Period>({} as Period);

  const handleConfirmButton = useCallback(() => {
    if (period.start_date && period.end_date) {
      const newPeriod = {
        start_date: period.start_date,
        end_date: period.end_date,
      }

      definePeriod(newPeriod);
  
      navigate('TabPagesStack');
    }
  }, [period, navigate]);

  const convertStartDate = useMemo(() => {
    if (period.start_date) {
      const month = convert(period.start_date.getMonth());
  
      return `${period.start_date.getDate()} ${month} ${period.start_date.getFullYear()}`;
    }
  }, [period]);

  const convertEndDate = useMemo(() => {
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
        enable={!!(period.start_date && period.end_date)}
        onPress={handleConfirmButton}
      />
    </Container>
  );
};

export default SelectPeriod;
