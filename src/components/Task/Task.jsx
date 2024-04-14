import { React, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import {
  ButtonsContainerStyled,
  FormContainerStyled,
  InputTextStyled,
  TaskContainerStyled,
} from './TaskStyles'
import Button from '../UI/Button'

const Task = () => {
  const { task, handleAdd, handleTask, handleDeleteAll } =
    useContext(TaskContext)
  return (
    <>
      <TaskContainerStyled>
        <FormContainerStyled onSubmit={(e) => handleAdd(e)}>
          <InputTextStyled type='text' value={task} onChange={handleTask} />
          <ButtonsContainerStyled>
            <Button bgcolor='green' type='submit'>
              Agregar
            </Button>
            <Button bgcolor='red' onClick={handleDeleteAll} type='button'>
              Borrar Todas
            </Button>
          </ButtonsContainerStyled>
        </FormContainerStyled>
      </TaskContainerStyled>
    </>
  )
}

export default Task
