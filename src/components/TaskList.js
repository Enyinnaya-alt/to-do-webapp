import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.length === 0 ? (
                <li>No tasks available</li>
            ) : (
                tasks.map((task) => (
                    <li key={task.taskId}>{task.task}</li>
                ))
            )}
        </ul>
    );
};

export default TaskList;