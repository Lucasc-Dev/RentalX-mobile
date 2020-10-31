import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ButtonContainerProps {
    enable?: boolean;
}

export const ButtonContainer = styled(RectButton)<ButtonContainerProps>`
    width: 100%;
    height: 55px;
    margin: 0 24px;
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
