import { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const handleTask = (e) => {
    setTask(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault()
    setTaskList([...taskList, task])
    setTask('')
  }
  const handleDeleteOne = (index) => {
    console.log(index)
    const newTaskList = taskList.toSpliced(index, 1)
    setTaskList(newTaskList)
  }
  const handleDeleteAll = () => {
    setTaskList([])
  }

  const context = {
    task,
    handleAdd,
    handleTask,
    taskList,
    handleDeleteAll,
    handleDeleteOne,
  }

  return <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
}
