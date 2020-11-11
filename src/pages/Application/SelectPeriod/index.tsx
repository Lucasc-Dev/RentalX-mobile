import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePeriod } from '../../../hooks/PeriodContext';
import { convert } from '../../../utils/ConvertMonth';
import { isAfter, isBefore, isEqual } from 'date-fns';

import Icon from 'react-native-vector-icons/Feather'
import Button from '../../../components/Button';

import { 
  Container,
  FlatListContainer,
  Header,
  Title,
  DateContainer,
  DateField,
  DateFieldTitle,
  DateFieldInput,
  ArrowIcon,
  CalendarContainer,
  CalendarTitle,
  MonthTitle,
  MonthTitleText,
  Arrows,
  ArrowButton,
  WeekDays,
  WeekDayText,
  Day,
  DayText,
} from './styles';

interface Day {
  date: Date;
  selected?: boolean;
  between?: boolean;
  valid: boolean;
}

interface Period {
  start_date: Date | undefined;
  end_date: Date | undefined;
}

const SelectPeriod: React.FC = () => {
  const { navigate } = useNavigation();
  const { definePeriod } = usePeriod();

  const [period, setPeriod] = useState<Period>({} as Period);

  const [days, setDays] = useState<Day[]>([]);

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    const weeks: Day[] = [];

    let dayIndex = 1 - firstDay.getDay();
    for (let i = 0; i < 42; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayIndex);

      const today = new Date();

      const isInThisMonth = date.getMonth() === currentDate.getMonth();
      const isNotInThePast = isBefore(new Date(), date);
      const isNotTooLong = isAfter(new Date(today.getFullYear(), today.getMonth() + 3), date)
      const isAfterStartDate = startDate && !endDate && (isAfter(date, startDate) || isEqual(date, startDate));
      const isBeforeEndDate = endDate && !startDate && (isBefore(date, endDate) || isEqual(date, endDate));
      const isBothDatesSelected = !!(endDate && startDate);
      const isBothDatesNotSelected = (!endDate && !startDate);

      const valid = 
        (isInThisMonth && isNotInThePast && isNotTooLong) &&
        ((isAfterStartDate || isBeforeEndDate) || (isBothDatesSelected || isBothDatesNotSelected));
        
      const selected = date.getTime() === startDate?.getTime() || date.getTime() === endDate?.getTime();
      
      const between = (startDate && endDate) && (isBefore(startDate, date) && isAfter(endDate, date));

      weeks.push({ 
        date, 
        valid,
        selected,
        between,
      });

      dayIndex++;
    }

    setDays(weeks);
    
    setStartDate(startDate);
    setEndDate(endDate);
  }, [currentDate, startDate, endDate, isBefore, isAfter]);

  const handleSelectDay = useCallback(({ date, valid }: Day) => {
    if (!valid) {
      return;
    }

    if (startDate?.getTime() === date.getTime()) {
      setStartDate(undefined);
      return;
    }

    if (endDate?.getTime() === date.getTime()) {
      setEndDate(undefined);
      return;
    }

    if (startDate && endDate && isBefore(date, startDate)) {
      setStartDate(date);
      return;
    }

    if (startDate) {
      setEndDate(date);
    }else{
      setStartDate(date);
    }
  }, [startDate, endDate]);

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

  const handlePreviousMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() - 1, 1));
  }, []);
  
  const handleNextMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() + 1, 1));
  }, []);

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

  const currentMonthAndYear = useMemo(() => {
    const month = convert(currentDate.getMonth());

    return `${month} ${currentDate.getFullYear()}`;
  }, [currentDate, convert]);

  return (
    <Container>
      <Header>
        <Title>Escolha a data e encontre um carro.</Title>
        
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInput>{convertStartDate}</DateFieldInput>
          </DateField>

          <ArrowIcon>
            <Icon name="arrow-right" size={18} color="#7a7a80"/>
          </ArrowIcon>

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInput>{convertEndDate}</DateFieldInput>
          </DateField>
        </DateContainer>
      </Header>
      <FlatListContainer
        data={days}
        keyExtractor={day => String(day.date)}
        numColumns={7}
        ListHeaderComponent={() => (
          <CalendarContainer>
            <CalendarTitle>
              <MonthTitle>
                <MonthTitleText>{currentMonthAndYear}</MonthTitleText>
              </MonthTitle>

              <Arrows>
                <ArrowButton
                  onPress={handlePreviousMonthButton}
                >
                  <Icon size={24} name="chevron-left" color="#7a7a80" />
                </ArrowButton>

                <ArrowButton
                  onPress={handleNextMonthButton}
                >
                  <Icon size={24} name="chevron-right" color="#7a7a80" />
                </ArrowButton>
              </Arrows>
            </CalendarTitle>

            <WeekDays>
              <WeekDayText>DOM</WeekDayText>
              <WeekDayText>SEG</WeekDayText>
              <WeekDayText>TER</WeekDayText>
              <WeekDayText>QUA</WeekDayText>
              <WeekDayText>QUI</WeekDayText>
              <WeekDayText>SEX</WeekDayText>
              <WeekDayText>SAB</WeekDayText>
            </WeekDays>
          </CalendarContainer>
        )}
        renderItem={({ item: day }) => (
          <Day 
            isSelected={day.selected}
            isBetween={day.between}
            onPress={() => {handleSelectDay(day)}}
          >
            <DayText 
              isValid={day.valid}
              isSelected={day.selected}
              isBetween={day.between}
            >
              {day.date.getDate()}
            </DayText>
          </Day>
        )}
        ListFooterComponent={() => (
          <Button 
            text="Confirmar"
            enable={!!(period.start_date && period.end_date)}
            onPress={handleConfirmButton}
          />
        )}
      />
    </Container>

    /* <Container>
      <Header>
        <Title>Escolha a data e encontre um carro.</Title>
        
        <DateContainer>
          <DateField>
            <DateFieldTitle>De</DateFieldTitle>

            <DateFieldInput>{convertStartDate}</DateFieldInput>
          </DateField>

          <ArrowIcon>
            <Icon name="arrow-right" size={18} color="#7a7a80"/>
          </ArrowIcon>

          <DateField>
            <DateFieldTitle>Até</DateFieldTitle>

            <DateFieldInput>{convertEndDate}</DateFieldInput>
          </DateField>
        </DateContainer>
      </Header>

      <Calendar 
        onChangeDate={(period) => setPeriod(period)}
      />

      <Button 
        text="Confirmar"
        enable={!!(period.start_date && period.end_date)}
        onPress={handleConfirmButton}
      />
    </Container> */
  );
};

export default SelectPeriod;
