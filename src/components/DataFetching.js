import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://e09d0bb6-2eaf-42b3-830e-0d9ac95f09a3.mock.pstmn.io/admin/professional/')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <div>
        <ul>
            { 
                posts.map(post => <li key={post.id}>{post.name}</li>) 
            }
        </ul>

    </div>
  )
}

export default DataFetching