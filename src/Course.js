import React from 'react'

function Course({id,content,price,title,removeOneCourse}) {

  return (
    <div className='card'>
      <div className="cardTitlePrice">
        <h2 className='cartTitle' >{title}</h2>
        <h4 className='cardPrice'>{price} TL</h4>
      </div>
      <p>{content}</p>
      <button className='cardDeleteBtn' onClick={()=>removeOneCourse(id)}>Sil</button>
    </div>
  )
}

export default Course