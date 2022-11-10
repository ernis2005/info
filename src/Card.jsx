import React from 'react'

function Card({data}) {
  return (
    <div>
        {
            data.map((res)=>{
                return(
                    <h1>{res.name}</h1>
                )
               
            })
        }
    </div>
  )
}

export default Card