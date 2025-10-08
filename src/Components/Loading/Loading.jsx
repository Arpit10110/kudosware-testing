import React from 'react'
import "./Loading.css"
import loadingsvg from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div className='Loading-div' >
      <div>
      <img src={loadingsvg} alt="loadingsvg" />
      </div>
    </div>
  )
}

export default Loading