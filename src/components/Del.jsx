import React from 'react'

function Del({del,i}){
  return (
    <div>
        <button className='btn btn-outline-danger' onClick={()=>del(i)}>Del</button>
    </div>
  )
}

export default Del