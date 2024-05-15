type TaskListProps = {
    item: {
        title: string,
        tasks: string[],
        id: number
    },
    onDelete: (id: number) => void;
}

function TaskList({ item, onDelete }: TaskListProps) {
    return (
        <div className="task">
            <div className="taskName">
                <button className='remove-grocery' onClick={() => onDelete(item.id)}>
                    X
                </button>
                <h1>{item.title}</h1>
                <ul>
                    {item.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskList;