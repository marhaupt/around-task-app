import React, { useCallback, useState } from 'react';

import { TaskType, TaskStateEnum } from './types';
import TaskInput from './containers/TaskInput';
import TaskList from './containers/TaskList';
import { AppWrapper } from './components';

const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const addTask = useCallback(
        (newTask: TaskType): void => setTasks([...tasks, newTask]),
        [tasks]
    );
    const changeTaskDescription = useCallback(
        (id: string, newDesc: string): void => {
            const updatedTasks = tasks.map((task) =>
                task.id === id ? { ...task, description: newDesc } : task
            );
            setTasks(updatedTasks);
        },
        [tasks]
    );
    const removeTask = useCallback(
        (id: string): void => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
        },
        [tasks]
    );
    const toggleTaskState = useCallback(
        (id: string): void => {
            const updatedTasks = tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          state:
                              task.state === TaskStateEnum.done
                                  ? TaskStateEnum.active
                                  : TaskStateEnum.done,
                      }
                    : task
            );
            setTasks(updatedTasks);
        },
        [tasks]
    );

    return (
        <AppWrapper>
            {tasks.length === 0 ? (
                <p>Add some tasks...</p>
            ) : (
                <TaskList
                    tasks={tasks}
                    changeTaskDescription={changeTaskDescription}
                    removeTask={removeTask}
                    toggleTaskState={toggleTaskState}
                />
            )}
            <TaskInput addTask={addTask} />
        </AppWrapper>
    );
};

export default App;
