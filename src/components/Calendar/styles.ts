import { differenceInCalendarDays } from 'date-fns/esm';
import styled, { css } from 'styled-components/native';

interface DayProps {
    isSelected?: boolean;
    isBetween?: boolean;
    isValid?: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`

`;

export const Title = styled.View`
    margin: 16px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MonthTitle = styled.View`

`;

export const MonthTitleText = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 20px;
    color: #47474D;
`;

export const Arrows = styled.View`
    width: 65px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ArrowButton = styled.TouchableOpacity`
`;

export const WeekDays = styled.View`
    margin: 0 24px 0 24px;
    padding-bottom: 12px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #ebebf0;
`;

export const WeekDayText = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #aeaeb3;
`;

export const MonthContainer = styled.View`
    flex: 1;
    margin: 20px 12px;
`;

export const MonthColumn = styled.View`
    flex-direction: column;
`;

export const MonthRow = styled.View`
    flex-direction: row;
`;

export const Day = styled.TouchableOpacity<DayProps>`
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;

    background-color: ${props => {
        if (props.isSelected) {
            return '#dc1637';
        }
        if (props.isBetween) {
            return '#fdedef';
        }
        return '#fff';
    }};
`;

export const DayText = styled.Text<DayProps>`
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #47474d;

    ${(props) => 
        props.isSelected && css`
            color: #FFF;
            font-family: 'Inter-SemiBold';
        `
    }

    ${(props) => 
        props.isBetween && css`
            color: #dc1637;
            font-family: 'Inter-SemiBold';
        `
    }

    ${(props) => 
        !props.isValid &&css`
            color: #AEAEB3;
        `
    }
`;

