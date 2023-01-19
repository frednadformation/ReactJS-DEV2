import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles/myStyle.css';
// import styles from './styles/myStyle.css';

function DataFetchAllTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [todos, setTodos] = useState({})

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(response => {
            setLoading(false);
            setTodos(response.data);
            setError('')
        })
        .catch(error => {
            setLoading(false);
            setTodos({})
            setError(error)
        })
    });


    {/* <div key={index} style={{backgroundColor: todos.completed ? "green" : "red"}}>
        <h2>Titre de la todos: {todos.title}</h2>
        <p>User id : {todos.userId}</p>
        <h2>Status : {todos.completed ? "Completed" : "Not completed"}</h2>
    </div> */}

  return (
    <div>
        {
            loading ? 'Loading...' : todos.map((todos, index) => {
                return (
                    <div key={index} className={ todos.completed ? "bgGreen" : "bgRed"}>
                        <h2>Titre de la todos: {todos.title}</h2>
                        <p>User id : {todos.userId}</p>
                        <h2>Status : {todos.completed ? "Completed" : "Not completed"}</h2>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default DataFetchAllTodos    