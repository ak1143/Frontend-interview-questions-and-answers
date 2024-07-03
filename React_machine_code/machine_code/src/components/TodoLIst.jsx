import React, { useState } from 'react'

function TodoLIst() {

    const[toDo,setToDo] = useState([]);
    const[input,setInput] = useState("");

    const handleClick = (e) =>{
       setToDo([...toDo,input]);
    }

    return (
        <div className='bg-pink-600'>
            <div className=''>
                <input type="text" value={input} onChange={setInput(e.target.value)}/>
                <button onClick={handleClick}> add </button>
            </div>
        </div>
  )
}

export default TodoLIst
