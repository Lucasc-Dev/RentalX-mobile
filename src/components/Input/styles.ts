import styled, { css } from 'styled-components/native';

interface InputContainerProps {
    isErrored?: boolean;
    isVisible?: boolean;
}

export const Container = styled.View<InputContainerProps>`
    margin: 0 24px 8px;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-color: transparent;

    ${props => props.isErrored && css`
        border-color: #dc1637;    
    `}

    ${props => props.isVisible === false && css`
        display: none;
    `}
`;

export const IconBox = styled.View`
    width: 55px;
    height: 56px;
    background-color: #f2f2fa;
    align-items: center;
    justify-content: center;
`;

export const InputBox = styled.View<InputContainerProps>`
    flex: 1;
    height: 56px;
    margin-left: 2px;
    background-color: #f2f2fa;
    flex-direction: row;
    justify-content: center;
    align-items: center;


`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-family: 'Inter-Medium-sInt=0';
    font-size: 16px;
    margin: 0 23px;
    color: #7a7a80;
`;

export const SpyButton = styled.TouchableOpacity`
    margin: 16px 16px 16px 0;
`;