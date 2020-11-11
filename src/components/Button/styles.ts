import styled, { css } from 'styled-components/native';
import { RectButton as ReactRectButton } from 'react-native-gesture-handler';

interface ButtonContainerProps {
    enable?: boolean;
}

export const Container = styled.View`
`;

export const RectButton = styled(ReactRectButton)<ButtonContainerProps>`
    width: 100%;
    height: 55px;
    background-color: #dc1637;
    justify-content: center;
    align-self: center;
    align-items: center;

    ${props => 
        !props.enable && css`
            opacity: 0.5;
        `
    }
`;

export const ButtonText = styled.Text`
    font-family: 'Inter-Medium';
    font-size: 16px;
    color: #FFF;
`;
