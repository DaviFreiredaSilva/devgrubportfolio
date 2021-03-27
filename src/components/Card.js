import React from 'react'
import CardInfo from './CardInfo'

export default function Card({item, click}) {
  return (
    <div className="d-inLine-block g-card" onClick={(e)=> click(item)}>
      <img className="g-card-image" src={item.imgSrc} alt={item.imgSrc}/>
      {
        item.selected && <CardInfo 
                          title={item.title} 
                          subTitle={item.subTitle} 
                          link={item.link}

                          />
                          }
    </div>
  )
}
