import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/salman98kaji')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

  return (
    <div className='text-center bg-gray-600 text-3xl text-white p-4'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt='git pic' width={300}></img>
    </div>
  )
}

export default Github