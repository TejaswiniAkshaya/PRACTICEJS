'use client';
import { useState } from "react";
import React from 'react'

interface Todo{
    id:number,
    text:string
}

export default function Todo() {
    const [task,setTask]=useState<string>("")
    const [todos,setTodos]=useState<Todo[]>([])
    const [isEditing,setIsEditing]=useState<boolean>(false)
    const [currentTodoId,setCurrentTodoId]=useState<number|null>(null)
    const [editText,setEditText]=useState<string>("")
    const addTodo=():void=>{
         if(task.trim()==="")return;
         if(isEditing && currentTodoId !==null){
           const updatedTodos=todos.map((todo)=>
            (todo.id===currentTodoId?{...todo,text:task}:todo)
           )
           setTodos(updatedTodos);
           setIsEditing(false)
           setCurrentTodoId(null)
         }else{
            setTodos([...todos,{id:Date.now(),text:task}])
         }
        
         setTask("")
        }
    const deleteTodo=(id:number)=>{
        const index=todos.findIndex(todo=>todo.id===id)
        if(index!==-1){
         const updatedTodos=[...todos];
         updatedTodos.splice(index,1);
         setTodos(updatedTodos);
        }
      // setTodos(todos.filter(todo=>todo.id!==id));
    }  
    const editTodo=(id:number,text:string)=>{
      setIsEditing(true)
      setCurrentTodoId(id)
      setTask(text)

    }  

  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input type="text"
             value={task}
             onChange={(e)=>{
                setTask(e.target.value)
             }
            }
            placeholder={isEditing?"Edit your task":"Enter a task"}
            style={{
                padding:"10px",
                
            }}
            />
            <button onClick={addTodo}>Add</button>
            <br/>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                         <span>{todo.text}</span>
                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         <button onClick={()=>editTodo(todo.id,todo.text)}>
                            Edit 
                            </button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                         <button
                         onClick={()=>deleteTodo(todo.id)}
                         >
                         Delete
                         </button>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

