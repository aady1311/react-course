import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 
  const data = useLoaderData()

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])

  // if (!data) return <div className="text-center text-2xl mt-10">Loading...</div>

  return (
    <div className="max-w-xl mx-auto mt-10 mb-4 p-4 bg-gray-800 text-white rounded-xl shadow-lg text-center space-y-4">
      <img src={data.avatar_url} width={100} className="mx-auto rounded-full" alt="GitHub Avatar" />
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-gray-300">@{data.login}</p>
      <p className="text-sm italic text-gray-400">{data.bio}</p>
      <div className="flex justify-center gap-6 text-lg mt-4">
        <div>
          <strong>{data.followers}</strong>
          <p>Followers</p>
        </div>
        <div>
          <strong>{data.following}</strong>
          <p>Following</p>
        </div>
        <div>
          <strong>{data.public_repos}</strong>
          <p>Repos</p>
        </div>
      </div>
      <a href={data.html_url} target="_blank" rel="noreferrer" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
        View Profile
      </a>
    </div>
  )
}

export default Github


export const  githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}