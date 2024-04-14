import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { ListContainerStyled, ListItemStyled, TaskStyled } from './ListStyles'
import Button from '../UI/Button'

const List = () => {
  const { taskList, handleDeleteOne } = useContext(TaskContext)

  return (
    <>
      <ListContainerStyled>
        <ul>
          {taskList.map((task, index) => (
            <ListItemStyled key={index}>
              <TaskStyled>{task}</TaskStyled>
              {task ? (
                <Button bgcolor='red' onClick={() => handleDeleteOne(index)}>
                  Eliminar
                </Button>
              ) : (
                ''
              )}
            </ListItemStyled>
          ))}
        </ul>
      </ListContainerStyled>
    </>
  )
}

export default List
