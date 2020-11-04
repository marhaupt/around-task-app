import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

import { TextInput, Button, InputLayout } from '../components';
import { TaskType, TaskStateEnum } from '../types';

type TaskInputProps = {
    addTask: (newTask: TaskType) => void;
};

const TaskInput: React.FunctionComponent<TaskInputProps> = ({ addTask }) => {
    const [newTask, setNewTask] = useState<string>('');

    const addNewTask = (): void => {
        if (newTask.trim().length > 0) {
            addTask({
                id: uuid4(),
                description: newTask.trim(),
                state: TaskStateEnum.active,
            });
            setNewTask('');
        }
    };

    return (
        <InputLayout>
            <TextInput
                type="text"
                value={newTask}
                placeholder="Add new task"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setNewTask(e.target.value)
                }
                onKeyPress={(
                    e: React.KeyboardEvent<HTMLInputElement>
                ): void => {
                    if (e.key === 'Enter') {
                        addNewTask();
                    }
                }}
            />
            <Button
                disabled={newTask.trim().length === 0}
                onClick={(): void => addNewTask()}
            >
                Add task
            </Button>
        </InputLayout>
    );
};

export default TaskInput;
