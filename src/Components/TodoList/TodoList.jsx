//                                     Parent component

import React, { useState } from 'react'
import TodoItems from './TodoItems';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inptext, setInpText] = useState('');

    const addTodo = () => {
        if (inptext.trim()) {
            setTodo([...todo, { id: Date.now(), text: inptext, completed: false }]);
            setInpText('');
        }
    }

    const toggleTodo = (id) => {
        setTodo(todo.map((todo) =>{
           return todo.id === id ? {...todo, completed: !todo.completed} : todo
        }))
    }

    return (
        <>
            <div className='bg-fuchsia-800 h-[100vh]'>
                <div className='py-[1.5rem] font-medium text-center'>
                    <h1 className='text-5xl text-white'>TODO LIST</h1>
                </div>
                <div className='w-[65%] h-[60%] mt-[2rem] pt-[2rem] absolute left-[15rem] border border-amber-50'>
                    <input type="text" placeholder='Enter a task' value={inptext} onChange={(e) => setInpText(e.target.value)} spellCheck='false' className='w-[75%] h-[12%] ml-[2rem] mt-[0.5rem] px-[0.7rem] py-[1rem] border rounded-b-sm text-white text-2xl' />
                    <button onClick={addTodo} className='ml-[3rem] px-[1rem] py-[0.3rem] border rounded-[5px] border-transparent bg-amber-50 hover:bg-fuchsia-400 hover:duration-75'>Add</button>

                    <ul>
                        {
                            todo.map((item) => {
                                return <TodoItems key={item.id}
                                text={item.text} 
                                completed={item.completed} 
                                onToggle={() => toggleTodo(item.id)} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList