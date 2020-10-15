import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { convert } from '../../utils/ConvertMonth';

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
  MonthDayColumn,
  MonthDayRow,
  MonthDay,
  MonthDayText,
} from './styles';

interface Week {
  days: Day[];
}

interface Day {
  date: Date;
  selected?: boolean;
  between?: boolean;
  isValid: boolean;
}

const Calendar: React.FC = () => {
  const [weekDays, setWeekDays] = useState<Week[]>([]);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    console.log(currentDate)
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
        const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayIndex);
        
        dayIndex++;

        weeks[i].days.push({ 
          date: day, 
          isValid: day.getMonth() === currentDate.getMonth(),
        });
      }
    }

    setWeekDays(weeks);
  }, [currentDate]);

  const handleLastMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() - 1, 1));
  }, []);
  
  const handleNextMonthButton = useCallback(() => {
    setCurrentDate(state => new Date(state.getFullYear(), state.getMonth() + 1, 1));
  }, []);

  const monthAndYear = useMemo(() => {
    const month = convert(currentDate.getMonth());

    return `${month} ${currentDate.getFullYear()}`;
  }, [currentDate]);

  return (
    <Container>  
      <Header>
        <Title>
          <MonthTitle>
            <MonthTitleText>{monthAndYear}</MonthTitleText>
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
        <MonthDayColumn>
          {
            weekDays.map(({ days }, index) => (
              <MonthDayRow key={index}>
                {
                  days.map((day) => (
                    <MonthDay 
                      key={day.date.getDate()}
                    >
                      <MonthDayText isValid={day.isValid}>{day.date.getDate()}</MonthDayText>
                    </MonthDay>
                  ))
                }
              </MonthDayRow>
            ))
          }
        </MonthDayColumn>
      </MonthContainer>
    </Container>
  );
};

export default Calendar;
