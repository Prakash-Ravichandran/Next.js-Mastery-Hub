"use client";

import { useState, useEffect } from "react";
import classes from "../globals.css";


export default function CSRComponent(){
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
      const callTodo = async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
          const data = await res.json();
          setTodos(data);
      }
      console.log(todos);
      callTodo();
  },[todos]);

    return (
        <>
        <h2 className="route"> --- I am a CSR component --- </h2>
        {todos?.length == 0 ? <p className="route"> Loading ...</p> : <p className="route"> *** Page is rendered with CSR data ***</p> }
        {todos.map((item)=>  (
            <p key={item.key} className={'route'}>Todo item {item.id}. - {item.title}</p>
        )
        )}
        </>
    );
}