import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-top: 24px;
    margin-bottom: 16px;
    padding: 0px 8px 8px 8px;
    outline: 2px solid ${p => p.theme.colors.green};
    border-radius: 4px;
    background-color: ${p => p.theme.colors.lightgreen};
`;

export const StyledInput = styled.input`
    width: 180px;
    border: none;
    padding: 0px 2px 2px 2px;
    border: none;
    border-radius: 4px;
    &:hover,
    &:focus,
    &:active {
    outline: 2px solid ${p => p.theme.colors.green};
}
`;

export const StyledTitle = styled.p`
    margin-bottom: 4px;
    font-weight: bold;
`;