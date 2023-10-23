import React from 'react'

import Card from './Card'
import  carddata  from './Carddata'
const Homepage = () => {
  return (
   
   <div className='grid grid-cols-3 h-[50rem] border border-black gap-1'>
       {
        carddata.map((item)=>

          <Card key={item.id} item={item} />
        )
       }
       
        </div>
       
        
    
  )
}

export default Homepage