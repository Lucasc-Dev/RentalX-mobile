import styled from 'styled-components/native';

interface DayTextProps {
    isValid: boolean;
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

export const MonthDayColumn = styled.View`
    flex-direction: column;
`;

export const MonthDayRow = styled.View`
    flex-direction: row;
`;

export const MonthDay = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
`;

export const MonthDayText = styled.Text<DayTextProps>`
    font-family: 'Inter-Medium-sInt=0';
    font-size: 15px;
    color: ${(props: DayTextProps) => props.isValid ? '#47474d' : '#AEAEB3'};
`;

