import React, { useEffect, useRef, useState } from 'react';

import { TaskItem, TaskText, TextInput, IconButton } from '../components';
import { TaskType, TaskStateEnum } from '../types';

type TaskProps = {
    task: TaskType;
    changeTaskDescription: (id: string, newDesc: string) => void;
    removeTask: (id: string) => void;
    toggleTaskState: (id: string) => void;
};

const Task: React.FunctionComponent<TaskProps> = ({
    task: { id, state, description },
    changeTaskDescription,
    removeTask,
    toggleTaskState,
}) => {
    const [edited, setEdited] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>(description);

    const inputRef = useRef<HTMLInputElement>(null);

    const confirmNewDescription = (): void => {
        changeTaskDescription(id, inputText);
        setEdited(false);
    };

    useEffect(() => {
        if (edited) {
            inputRef?.current?.focus();
        }
    }, [edited]);

    return (
        <TaskItem key={id} state={state}>
            <input
                type="checkbox"
                checked={state === TaskStateEnum.done}
                onChange={() => toggleTaskState(id)}
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
                        if (state === TaskStateEnum.active) {
                            setEdited(!edited);
                        }
                    }}
                >
                    {description}
                </TaskText>
            )}
            <IconButton onClick={(): void => removeTask(id)}>×</IconButton>
        </TaskItem>
    );
};

export default Task;
