import React from 'react';
import { Todo } from '../model';
import

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo = ({ todo , todos, setTodos }: Props) => {
  return (
    <form className='todos__single'>
        <span className="todos__single--text">
            {todo.todo}
        </span>
            <div>
                <span className="icon"></span>
                <span className="icon"></span>
                <span className="icon"></span>
            </div>


    </form>
  )
}

export default SingleToDo