import React from 'react'

const QuoteBox = ({randomAuthor, randomColors,getRandomAll}) => {

  const obColStyle = {
    color: randomColors
  }
  
  return (
    <div className='card_container' style={obColStyle}>
        <i class='bx bxs-quote-alt-left' style={obColStyle}></i>
        <h2 className='card_quote'>{`${randomAuthor.quote}`}</h2>
    </div>
  )
}

export default QuoteBox 