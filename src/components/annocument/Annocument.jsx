import React from "react"
import banner1 from'./images/banner-1.png'  
import banner2 from'./images/banner-2.png'  
const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "60%",
    height: "340px",
    marginLeft : "60px"
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src={banner1} width='100%' alt="" />
          </div>
          <div className='img' style={mystyle1}>
          <img  src={banner2} width='100%' alt=""/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument