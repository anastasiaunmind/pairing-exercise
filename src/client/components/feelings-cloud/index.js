import React from "react";
import PropTypes from "prop-types";
import { StyledContainer, StyledFeeling } from "./index.styled";


function FeelingsCloud({ items = [], onChange }) {
    return (
        <StyledContainer>
            {items.map((item) => (
                <StyledFeeling data-testid="feeling" data-checked={item.checked ? "true" : "false"} checked={item.checked} key={item.value} onClick={() => {
                    onChange({...item, checked: !item.checked});
                }}>{item.label}</StyledFeeling>
            ))}
        </StyledContainer>
    );
}

FeelingsCloud.propTypes = {
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FeelingsCloud;
