import React from "react";

const Iframe=({url,...rest})=>{
  return (<iframe src={url} width="100%" height="500px" {...rest}/>
}

export default Iframe;
