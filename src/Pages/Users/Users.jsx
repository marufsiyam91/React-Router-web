import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
     const Users = useLoaderData()
     console.log(Users)
  return (
    <div>

    </div>
  )
}

export default Users
