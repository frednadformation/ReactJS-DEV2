import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataJson() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [film, setFilm] = useState({})
    const [name, setName] = useState("")
    

    const apiLink = `http://www.omdbapi.com/?t=${name}&apikey=bf8db986`
    // const apiLink = 'http://www.omdbapi.com/?apikey=bf8db986&t=' + {name}.name

    useEffect(() => {
        axios.get(apiLink)
        .then(response =>{
            setLoading(false)
            setError("")
            setFilm(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError("Something went wrong")
            setFilm({})
        })
    })
    const handleNameChange = event =>{
        setName(event.target.value)
        console.log(event.target.value);
    }

  return (
    <div>
        <input type="text" onChange={handleNameChange}/>
        <br/>
        {
            loading ? "Loading..." : film.Title
        }
        <br/>
        {
            loading ? "Loading..." : <img src={film.Poster}/> 
        }

        <br/>
        {
            loading ? "Loading..." : film.BoxOffice
        }
        <br/>
        {
            loading ? "Loading..." : film.Year
        }
        {
            error ? "Error" : null
        }
    </div>
  )
}

export default DataJson