"use client"
import { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client' // replace with the actual path to your client file

const Utvikling = () => {
  const [utviklingData, setUtviklingData] = useState(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "utvikling"]`)
      .then((data) => setUtviklingData(data))
      .catch(console.error)
  }, [])

  if (!utviklingData) return <div>Loading...</div>

  return (
    <div className='flex bg-blue-600'>
        Utvikling
      {utviklingData.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {/* Display more fields as needed */}
        </div>
      ))}
    </div>
  )
}

export default Utvikling