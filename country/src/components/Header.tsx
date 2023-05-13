import React from 'react'

const Header = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "3fr 1fr 2fr 1fr 1fr 40px", paddingInline: "20px", backgroundColor: "#808080"}}>
        <h4>COUNTRY</h4>
        <h4>REGION</h4>
        <h4>POPULATION</h4>
        <h4>AREA</h4>
        <h4>FLAG</h4>
      </div>
  )
}

export default Header