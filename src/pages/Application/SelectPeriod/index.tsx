import React, { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePeriod } from '../../../hooks/PeriodContext';
import { convert } from '../../../utils/ConvertMonth';
import { isAfter, isBefore, isEqual } from 'date-fns';

import Icon from 'react-native-vector-icons/Feather'

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
  Button,
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface Day {
  date: Date;
  selected?: boolean;
  between?: boolean;
  valid: boolean;
}

const SelectPeriod: React.FC = () => {
  const { navigate } = useNavigation();
  const { definePeriod } = usePeriod();

  const flatListRef = createRef<FlatList<Day>>();

  const [days, setDays] = useState<Day[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [firstSelect, setFirstSelect] = useState(true);

  useEffect(() => {
    const weeks: Day[] = [];
    
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const totalDays = firstDay.getDay() + 1 + lastDay.getDate() > 35 ? 42 : 35;

    let dayIndex = 1 - firstDay.getDay();
    
    for (let i = 0; i < totalDays; i++) {
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

    if (startDate && endDate && firstSelect) {
      setFirstSelect(false);

      flatListRef.current?.scrollToEnd();
    }
    if (!startDate && !endDate && !firstSelect) {
      setFirstSelect(true);
    }
  }, [currentDate, startDate, endDate, firstSelect]);

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

  const handlePreviousMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() - 1, 1));
  }, []);
  
  const handleNextMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() + 1, 1));
  }, []);
  
  const handleConfirmButton = useCallback(() => {
    if (startDate && endDate) {

      definePeriod({ start_date: startDate, end_date: endDate });
  
      navigate('TabPagesStack');
    }
  }, [startDate, endDate, navigate]);

  const convertStartDate = useMemo(() => {
    if (startDate) {
      const month = convert(startDate.getMonth());
  
      return `${startDate.getDate()} ${month} ${startDate.getFullYear()}`;
    }
  }, [startDate]);

  const convertEndDate = useMemo(() => {
    if (endDate) {
      const month = convert(endDate.getMonth());
  
      return `${endDate.getDate()} ${month} ${endDate.getFullYear()}`;
    }
  }, [endDate]);

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
        ref={flatListRef}
        data={days}
        keyExtractor={day => String(day.date)}
        numColumns={7}
        showsVerticalScrollIndicator={false}
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
            enable={!!(startDate && endDate)}
            onPress={handleConfirmButton}
          />
        )}
      />
    </Container>
  );
};

export default SelectPeriod;
