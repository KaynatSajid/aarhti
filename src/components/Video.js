import React from 'react'

function Video() {
  return (
    <div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "70vh", marginTop:'70px' }}>
  
  <video src='./AARHTI-Video.mp4' style={{ width: "80%", height: "80%" ,onmouseover:"this.controls=true",
  onmouseout:"this.controls=false"}} controls autoPlay loop />
  </div>

    </div>
  )
}

export default Video
