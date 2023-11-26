import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props ) => {
  return (
    <form
        className='input'>
        <input
            type="input"
            placeholder="Enter a Task"
            className='input-box'
        />
        <button
            className='input-submit'
            type="submit">Add</button>

    </form>
  )
}

export default InputField