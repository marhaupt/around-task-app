import React, { useEffect, useRef, useState } from 'react';

import { TaskItem, TaskText, TextInput, IconButton, CheckBox } from '../components';
import { TaskType, TaskStateEnum } from '../types';

type TaskProps = {
    task: TaskType;
    changeTaskDescription: (id: string, newDesc: string) => void;
    removeTask: (id: string) => void;
    toggleTaskState: (id: string) => void;
};

const Task: React.FunctionComponent<TaskProps> = ({
    task,
    changeTaskDescription,
    removeTask,
    toggleTaskState,
}) => {
    const [edited, setEdited] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>(task.description);

    const inputRef = useRef<HTMLInputElement>(null);

    const confirmNewDescription = (): void => {
        changeTaskDescription(task.id, inputText);
        setEdited(false);
    };

    useEffect(() => {
        if (edited) {
            inputRef?.current?.focus();
        }
    }, [edited]);

    return (
        <TaskItem key={task.id} state={task.state}>
            <CheckBox
                checked={task.state === TaskStateEnum.done}
                onChange={() => toggleTaskState(task.id)}
            />
            {edited ? (
                <TextInput
                    type="text"
                    value={inputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                        setInputText(e.target.value)
                    }
                    onBlur={confirmNewDescription}
                    ref={inputRef}
                    onKeyPress={(
                        e: React.KeyboardEvent<HTMLInputElement>
                    ): void => {
                        if (e.key === 'Enter') {
                            confirmNewDescription();
                        }
                    }}
                />
            ) : (
                <TaskText
                    onClick={(): void => {
                        if (task.state === TaskStateEnum.active) {
                            setEdited(!edited);
                        }
                    }}
                >
                    {task.description}
                </TaskText>
            )}
            <IconButton onClick={(): void => removeTask(task.id)}>×</IconButton>
        </TaskItem>
    );
};

export default Task;
