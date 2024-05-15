import AddTaskForm from './assets/component/AddTaskForm';
import Header from './assets/component/Header'
import TaskList from './assets/component/TaskList'
import Search from './assets/component/Search';
import { useState } from 'react'
import "./App.css"

type TaskListProps = {
  title: string,
  tasks: string[],
  id: number
}[];

function App() {
  const [search, setSearch] = useState('');
  const [tasklist, setTaskList] = useState<TaskListProps>([

    {

      title: 'Humber',

      tasks: ['Task 1', 'Task 2', 'Task 3'],

      id: 1,

    },

    {

      title: 'MERN',

      tasks: ['Lab', 'Project', 'Quiz'],

      id: 2,

    },

    {

      title: 'Java',

      tasks: ['Group Discussion', 'Exam', 'Assignment'],

      id: 3,

    },

  ]
  )

  //function to habnle delete
  const handleDelete = (id: number) => {
    setTaskList((currentTask) => currentTask.filter((t) => t.id !== id));
  };

  //function to add new task
  const handleAddTask = (title: string, tasks: string[]) => {
    setTaskList((currTask) => [
      ...currTask,
      {
        title: title,
        tasks: tasks,
        id: currTask.length + 1,
      },
    ]);
  };

  const filterTask = (title: string) => {
    if (title) {
      setSearch(title);
    } else {
      setSearch('');
    }
  };

  return (
    <>
      <Header></Header>
      <AddTaskForm onAddTask={handleAddTask} />
      <Search onFilter={filterTask} />
      <div className='main-content'>
        <h2>Task List</h2>
        <h2>Total number of Tasks: 9</h2>
        {tasklist
          .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
          .map(t => (
            <TaskList key={t.id} item={t} onDelete={handleDelete} />
          ))}
      </div>
    </>
  )
}

export default App
