import React from 'react';
import styled from 'styled-components';

type CheckBoxProps = {
    checked: boolean;
    onChange: () => void;
};

const FakeCheckBox = styled.div<{ checked: boolean }>`
    border: var(--border-width) solid var(--around-purple);
    width: 0.7rem;
    height: 0.75rem;
    background-color: ${({ checked }) =>
        checked ? 'var(--around-purple)' : 'transparent'};
    cursor: pointer;
    transition: background-color var(--duration-fast) ease-in-out;
`;

export const CheckBox: React.FunctionComponent<CheckBoxProps> = ({
    checked,
    onChange,
}) => (
    <label>
        <FakeCheckBox checked={checked} />
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            style={{ display: 'none' }}
        />
    </label>
);
