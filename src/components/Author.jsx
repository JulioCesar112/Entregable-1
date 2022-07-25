import React from 'react'

const Author = ({randomAuthor,randomColors}) => {
  const obColStyle = {
    color: randomColors
  }
  return (
    <h2 className='card_author' style={obColStyle}>{`${randomAuthor.author}`}</h2>
  )
}

export default Author