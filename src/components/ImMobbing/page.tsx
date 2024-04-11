import React from 'react'
import { client } from '../../../sanity/lib/client'
import { useEffect, useState } from 'react'

const Mobbing = () => {
    const [mobbingData, setmobbingData] = useState(null)
  
  
    useEffect(() => {
      client
        .fetch(`*[_type == "mobbing"]`)
        .then((data) => setmobbingData(data))
        .catch(console.error)
    }, [])
  
    if (!mobbingData) return <div><span className="loading loading-dots loading-md"></span></div>
  

  return (
    <div>
        <div className='flex justify-center item-center text-center text-gray-50 flex-col'>
        <div><h1 className='text-gray-50 text-3xl font-serif'>Mathias sin mobbe liste</h1></div>

        <div className='flex justify-center items-center mt-10'>
            <div className='relative group '>
                    
                
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-70   "></div>
                            <div className='relative bg-dark rounded-xl w-[30rem] px-4 py-4'>
                                <h1 className=' textl-2xl  font-semibold'>De beste ordene for å mobbe IM elever:</h1>
                                <div className='w-[28rem] h-[1px] bg-darkb2 mt-3'></div>
                                <div>
                                {mobbingData && mobbingData.map((item: any, index: number) => (
                                    <div key={index} className=' flex justify-center flex-col item-center text-center  mx-6'>
                                        
                                        
                                        
                                            <div className='flext justify-center item-center max-w-[60rem] text-center'>
                                                <h2 className='mt-4 text-md text-start'>{index + 1}. {item.title}</h2>
        
        
                                                
        
                                                    
                                            </div>
        
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>
            
        
        
                    </div>
            </div>
            
            

        </div>
        
    
    
    </div>
    
  )
};

export default Mobbing;
