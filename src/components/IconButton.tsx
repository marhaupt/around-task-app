import styled from 'styled-components';

export const IconButton = styled.button`
    background: var(--around-purple);
    width: 1rem;
    height: 1rem;
    line-height: 1;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    transition: background-color var(--duration-fast) ease-in-out;

    &:hover,
    &:focus {
        background-color: var(--around-purple-lighter);
    }
`;
