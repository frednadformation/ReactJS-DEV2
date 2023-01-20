import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

function FetchApi() {
    const initialState = {
        loading: true,
        error: '',
        users:{} 
    }
    const reducer = (state , action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return {
                    loading: false,
                    users: {},
                    error: 'Something went wrong'
                }
            default : 
                return state
                
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then((response) =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch((error) =>{
            dispatch({type: 'FETCH_ERROR'})
            
        })
        

    });
  return (
    <div>
    {
        state.loading ? 'Loading...' :
         
        state.users.data.map((user, index) => {

                return (<div key={index}>
                <h1>Le nom est : {user.nom}</h1>
                <h2>Prénom: {user.prenom}</h2>
                <p>Email : {user.email}</p>
                
                </div>)
            })
    }
    </div>
  )
}

export default FetchApi