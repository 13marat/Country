import React from 'react'


const Name = ({name}: any): JSX.Element => {

  return (
    <>
      <div style={{fontWeight: "bold"}}>{name}</div>
    </>
  )
}

export default Name