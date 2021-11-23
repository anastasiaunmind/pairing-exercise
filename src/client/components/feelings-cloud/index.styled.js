import styled from "styled-components";


export const StyledContainer = styled.div`
`;

const FeelingPadding = 5;
const FeelingMargin = 1;

export const StyledFeeling = styled.div`
    display: inline-block;
    background: ${props => props.checked ? "#a3a2a2" : "#fff"};
    border: none;
    border-radius: 1px;
    padding: 5px;
    margin: 1px;
    width: calc(50% - ${2 * FeelingMargin + 2 * FeelingPadding}px);
    color: ${props => props.checked ? "#fff" : "#a3a2a2"};
    cursor: pointer;
    font-size: 12px;
    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.5);
`;