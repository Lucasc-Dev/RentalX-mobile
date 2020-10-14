import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

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

const Calendar: React.FC = () => {
  const [weekDays, setWeekDays] = useState([
    [1, 2, 3, 4, 5, 6, 7], 
    [8, 9, 10, 11, 12, 13, 14], 
    [15, 16, 17, 18, 19, 20, 21], 
    [22, 23, 24, 25, 26, 27, 28], 
    [29, 30, 31, 1, 2, 3, 4],
  ]);

  useEffect(() => {
    
  }, []);

  return (
    <Container> 
      <Header>
        <Title>
          <MonthTitle>
            <MonthTitleText>Julho 2020</MonthTitleText>
          </MonthTitle>

          <Arrows>
            <ArrowButton>
              <Icon size={24} name="chevron-left" color="#7a7a80" />
            </ArrowButton>

            <ArrowButton>
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
            weekDays.map((days, index) => (
              <MonthDayRow key={index}>
                {
                  days.map((day) => (
                    <MonthDay key={day}>
                      <MonthDayText>{day}</MonthDayText>
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
