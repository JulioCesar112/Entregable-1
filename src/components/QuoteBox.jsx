import React from 'react'

const QuoteBox = ({randomAuthor, randomColors,getRandomAll}) => {

  const obColStyle = {
    color: randomColors
  }
  const obBgStyle = {
    backgroundColor: randomColors
  }
  return (
    <div className='card' style={obColStyle}>
      <div className='card_container'>
        <i class='bx bxs-quote-alt-left' style={obColStyle}></i>
        <h2 className='card_quote'>{`${randomAuthor.quote}`}</h2>
      </div>
      <h2 className='card_author'>{`${randomAuthor.author}`}</h2>
      <a onClick={getRandomAll} className='card_btn' href='#' style={obBgStyle}>&#62;</a>
    </div>
  )
}

export default QuoteBox 