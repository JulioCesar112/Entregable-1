import React from 'react'

const Botton = ({randomColors,getRandomAll}) => {
  
  const obBgStyle = {
    backgroundColor: randomColors
  }
  return (
    <a onClick={getRandomAll} className='card_btn' href='#' style={obBgStyle}>&#62;</a>
  )
}

export default Botton