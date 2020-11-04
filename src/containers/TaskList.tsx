import React from 'react';

import { TaskList as TaskListComponent } from '../components';
import { TaskType } from '../types';
import Task from './Task';

type TaskListProps = {
    tasks: TaskType[];
    changeTaskDescription: (id: string, newDesc: string) => void;
    removeTask: (id: string) => void;
    toggleTaskState: (id: string) => void;
};

const TaskList: React.FunctionComponent<TaskListProps> = ({
    tasks,
    changeTaskDescription,
    removeTask,
    toggleTaskState,
}) => (
    <TaskListComponent>
        {tasks.map((task) => (
            <Task
                task={task}
                key={task.id}
                changeTaskDescription={changeTaskDescription}
                removeTask={removeTask}
                toggleTaskState={toggleTaskState}
            />
        ))}
    </TaskListComponent>
);

export default TaskList;
