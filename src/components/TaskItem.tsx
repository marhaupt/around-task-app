import styled from 'styled-components';
import { TaskStateEnum } from '../types';

export const TaskItem = styled.li<{ state: TaskStateEnum }>`
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    align-items: center;
    color: ${({ state }) =>
        state === TaskStateEnum.done ? '#777' : 'inherit'};
    text-decoration: ${({ state }) =>
        state === TaskStateEnum.done ? 'line-through' : 'none'};
`;
