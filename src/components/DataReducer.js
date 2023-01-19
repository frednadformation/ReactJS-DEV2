import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

function DataReducer() {
    const initialState = {
        loading: true,
        error: '',
        posts : {}
    }
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    posts: action.payload,
                    error: ""
            }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    posts: {},
                    error: "Something went wrong"
            }
        default :
            return state
    }
}

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    })


  return (
    <React.Fragment>
        {
            state.loading ? 'Loading'  : 
            state.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>Titre de la posts : {post.title}</h2>
                        <p>descriptions des posts : {post.body}</p>
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default DataReducer