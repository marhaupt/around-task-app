import styled from 'styled-components';

export const Button = styled.button`
    padding: 0.2rem 0.5rem;
    border: none;
    background-color: var(--around-purple);
    color: inherit;
    font-family: inherit;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color var(--duration-fast) ease-in-out;

    &:not(:disabled):hover {
        background-color: var(--around-purple-lighter);
    }

    &:disabled {
        background-color: #a295b7;
        cursor: not-allowed;
    }
`;
