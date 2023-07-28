import React, { useState } from 'react'

const User = ({name}) => {
    const [count]=useState(0);
  return (
    <div>
        <p>count={count}</p>
        <p>Name:{name}</p>
        <p>Location:</p>
        <p>Contact:</p>
    </div>
  )
}

export default User