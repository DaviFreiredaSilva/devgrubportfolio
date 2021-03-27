import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

export default function HomePage({title, subTitle, text}) {
  return (
    <div>
      <Hero title={title} subtitle={subTitle} text={text}/>
      <Carousel/>
    </div>
  )
}
