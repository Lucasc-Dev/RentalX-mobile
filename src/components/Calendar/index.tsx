import React, { useState } from 'react';
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
  MonthDay,
  MonthDayText,
} from './styles';

const Calendar: React.FC = () => {
  const [monthDays, setMonthDays] = useState([]);

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
        <MonthDay>
          <MonthDayText>1</MonthDayText>
        </MonthDay>
      </MonthContainer>
    </Container>
  );
};

export default Calendar;
