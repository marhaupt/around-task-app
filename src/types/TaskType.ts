import { TaskStateEnum } from './TaskStateEnum';

export type TaskType = {
    id: string;
    description: string;
    state: TaskStateEnum;
};
