import styled from 'styled-components';

export const TaskList = styled.ul`
    padding: 0 0.25rem 0 0;
    margin: 0;
    list-style-type: none;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar-track {
        border-radius: 5px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #333;
    }
`;
