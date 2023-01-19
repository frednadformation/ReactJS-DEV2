import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetchAll() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [posts, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    });

    return (
        <div>
            {
                loading ? 'Loading' : posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <h2>Titre du post : {post.title}</h2>
                            <p>Description du post : {post.body}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default DataFetchAll