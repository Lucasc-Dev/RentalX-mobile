import { FlatList } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import ButtonComponent from '../../../components/Button';

interface Day {
    date: Date;
    selected?: boolean;
    between?: boolean;
    valid: boolean;
}

interface DayProps {
    isSelected?: boolean;
    isBetween?: boolean;
    isValid?: boolean;
}

export const Container = styled.View`
    background-color: #FFF;
`;

export const FlatListContainer = styled(FlatList as new () => FlatList<Day>)`
    margin: 0 12px;
    background-color: #FFF;
    z-index: 10;
`;

export const Header = styled.View`
    position: absolute;
    z-index: 15;

    width: 100%;
    height: 240px;
    background-color: #1b1b1f;
`;

export const Title = styled.Text`
    width: 218px;
    margin: 40px 0 0 24px;
    font-family: 'Archivo-SemiBold';
    font-size: 30px;
    color: #FFF;
`;

export const DateContainer = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowIcon = styled.View`
    height: 38px;
    justify-content: flex-end;
    align-items: center;
`;

export const DateField = styled.View`
`;

export const DateFieldTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #7a7a80;
`;

export const DateFieldInput = styled.Text`
    margin-top: 8px;
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #FFF;
`;

export const CalendarContainer = styled.View`
    padding: 240px 0 12px;
`;

export const CalendarTitle = styled.View`
    margin: 28px 12px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MonthTitle = styled.View`

`;

export const MonthTitleText = styled.Text`
    font-family: 'Archivo-SemiBold';
    font-size: 21px;
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
    margin: 0 12px;
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

export const Button = styled(ButtonComponent).attrs({
    marginHorizontal: 0,
})`
    margin: 24px 0 16px;
`;

/* export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { paddingBottom: 20 },
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: #FFF;
`;

export const Details = styled.View`
    width: 100%;
    height: 240px;
    background-color: #1b1b1f;
`;

export const Title = styled.Text`
    width: 218px;
    margin: 40px 0 0 24px;
    font-family: 'Archivo-SemiBold';
    font-size: 30px;
    color: #FFF;
`;

export const DateContainer = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowIcon = styled.View`
    height: 38px;
    justify-content: flex-end;
    align-items: center;
`;

export const DateField = styled.View`
`;

export const DateFieldTitle = styled.Text`
    font-family: 'Archivo-SemiBold';
    text-transform: uppercase;
    font-size: 10px;
    color: #7a7a80;
`;

export const DateFieldInput = styled.Text`
    margin-top: 8px;
    font-family: 'Inter-Medium';
    font-size: 15px;
    color: #FFF;
`; */
