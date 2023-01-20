import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

function Blog() {
    const initialState = {
        loading : true,
        error : '',
        posts: {}
    }
    const reducer = (state, action) =>{
        switch(action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    error: '',
                    posts: action.payload
                }
            case 'FETCH_ERROR': 
                return {
                    loading : false,
                    error: "Something went wrong",
                    posts: {}
                }
            default: 
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        axios.get('http://localhost:5000/allposts')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })

    })
  return (
    <div>
         {
        state.loading ? 'Loading...' :
         
        state.posts.data.map((post, index) => {

                return (<div key={index}>
                <h1>Le titre est : {post.titre}</h1>
                <h2>auteur: {post.auteur}</h2>
                <p>description : {post.description}</p>
                
                </div>)
            })
    }</div>
  )
}

export default Blog