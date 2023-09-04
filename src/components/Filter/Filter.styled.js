import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0px 8px 8px 8px;
    outline: 1px solid ${p => p.theme.colors.green};
    border-radius: 4px;
    background-color: ${p => p.theme.colors.lightgreen};
`;

export const StyledInput = styled.input`
    width: 260px;
    border: none;
    padding: 0px 2px 2px 2px;
    border: none;
    border-radius: 4px;
    &:hover,
    &:focus,
    &:active {
    outline: 1px solid ${p => p.theme.colors.green};
}
`;

export const StyledTitle = styled.p`
    padding: 10px;
    margin-bottom: 4px;
`;