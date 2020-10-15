import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { convert } from '../../utils/ConvertMonth';
import { isBefore, isAfter } from 'date-fns';

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
  MonthContainer,
  MonthColumn,
  MonthRow,
  Day,
  DayText,
} from './styles';

interface Week {
  days: Day[];
}

interface Day {
  date: Date;
  selected?: boolean;
  between?: boolean;
  valid: boolean;
}

const Calendar: React.FC = () => {
  const [weekDays, setWeekDays] = useState<Week[]>([]);

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    const weeks: Week[] = [
      { days: [] },
      { days: [] },
      { days: [] },
      { days: [] },
      { days: [] },
      { days: [] },
    ];

    let dayIndex = 1 - firstDay.getDay();
    for (let i = 0; i < weeks.length; i++) {
      for (let j = 0; j < 7; j++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayIndex);
        
        const today = new Date();

        const isInThisMonth = date.getMonth() === currentDate.getMonth();
        const isNotInThePast = isBefore(new Date(), date);
        const isNotTooMonthsLong = isAfter(new Date(today.getFullYear(), today.getMonth() + 3), date)
        const isBeforeStartDate = (startDate && isAfter(startDate, date));
        const isAfterEndDate = (endDate && !startDate && isBefore(endDate, date));
        const isEndDateAndStartDateSelected = !!(endDate && startDate);

        const valid = 
          (isInThisMonth && isNotInThePast && isNotTooMonthsLong) &&
          ((isBeforeStartDate || isAfterEndDate) || (isEndDateAndStartDateSelected));
          
        const selected = date.getTime() === startDate?.getTime() || date.getTime() === endDate?.getTime();
        
        const between = (startDate && endDate) && (isBefore(startDate, date) && isAfter(endDate, date));

        weeks[i].days.push({ 
          date, 
          valid,
          selected,
          between,
        });

        dayIndex++;
      }
    }

    setWeekDays(weeks);
  }, [currentDate, startDate, endDate]);

  const handleLastMonthButton = useCallback(() => {
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
              onPress={handleLastMonthButton}
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

      <MonthContainer>
        <MonthColumn>
          {
            weekDays.map(({ days }, index) => (
              <MonthRow key={index}>
                {
                  days.map((day) => (
                    <Day 
                      key={day.date.getDate()}
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
                  ))
                }
              </MonthRow>
            ))
          }
        </MonthColumn>
      </MonthContainer>
    </Container>
  );
};

export default Calendar;
