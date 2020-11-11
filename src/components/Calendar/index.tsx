import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { convert } from '../../utils/ConvertMonth';
import { isBefore, isAfter, isEqual } from 'date-fns';

import { 
  Container,
  Header,
  Title,
  MonthTitle,
  MonthTitleText,
  Arrows,
  ArrowButton,
  WeekDays,
  WeekDayText,
  CalendarDaysList,
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

interface CalendarProps {
  onChangeDate: (period: Period) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onChangeDate }) => {
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
    
    const period = {
      start_date: startDate,
      end_date: endDate,
    };

    onChangeDate(period);
  }, [currentDate, startDate, endDate, isBefore, isAfter]);

  const handlePreviousMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() - 1, 1));
  }, []);
  
  const handleNextMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() + 1, 1));
  }, []);

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

  const currentMonthAndYear = useMemo(() => {
    const month = convert(currentDate.getMonth());

    return `${month} ${currentDate.getFullYear()}`;
  }, [currentDate, convert]);

  return (
    <Container>  
      <Header>
        <Title>
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
        </Title>

        <WeekDays>
          <WeekDayText>DOM</WeekDayText>
          <WeekDayText>SEG</WeekDayText>
          <WeekDayText>TER</WeekDayText>
          <WeekDayText>QUA</WeekDayText>
          <WeekDayText>QUI</WeekDayText>
          <WeekDayText>SEX</WeekDayText>
          <WeekDayText>SAB</WeekDayText>
        </WeekDays>
      </Header>

      <CalendarDaysList 
        data={days}
        numColumns={7}
        keyExtractor={day => String(day.date)}
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
      />
    </Container>
  );
};

export default Calendar;
