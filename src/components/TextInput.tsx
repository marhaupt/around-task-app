import styled from 'styled-components';

export const TextInput = styled.input`
    padding: 0;
    border: none;
    border-bottom: var(--border-width) solid var(--around-purple);
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    transition: border-bottom-color var(--duration-fast) ease-in-out;
    width: 100%;

    &:hover,
    &:focus {
        border-bottom-color: var(--around-purple-lighter);
    }
`;
