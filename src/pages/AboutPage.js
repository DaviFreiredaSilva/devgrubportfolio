import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

export default function AboutPage({title, subTitle, text}) {
  return (
    <div>
      
      <Hero title={title}/>

      <Content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus libero ac neque dictum malesuada. Sed urna nisi, pellentesque sit amet tellus eget, sodales ullamcorper purus. Sed bibendum tempor nibh eget lobortis. Fusce ut augue vulputate, sagittis dui vitae, convallis metus. Nunc nec interdum nisi. Phasellus ultricies dolor mauris, et congue sem placerat id. In quis elit elit. Donec semper efficitur massa, eget lobortis massa blandit vitae.</p>
        <p>Pellentesque magna quam, convallis vel nisl at, condimentum pulvinar purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis porta mi. Suspendisse fermentum aliquam tempor. Nam aliquet eget felis nec lacinia. Nunc ultricies molestie ipsum at lobortis. Quisque sed laoreet felis, eget rutrum justo.</p>
        <p>Ut bibendum elementum blandit. Aenean sed odio eget elit cursus suscipit. Morbi nec placerat tellus. Suspendisse non vehicula nisi, et feugiat nulla. Pellentesque nec lacus efficitur, sodales mi non, semper est. Phasellus mi sem, imperdiet sed risus nec, consequat ultricies justo. Vivamus feugiat ut dui sed venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ultricies, enim nec suscipit volutpat, velit leo ornare diam, ut auctor justo neque nec ante. Mauris nec suscipit nisi. Nullam nec ipsum tortor. Phasellus et risus diam. Suspendisse dictum nisl diam, at ullamcorper enim elementum et. Nunc augue ante, viverra at aliquam eget, imperdiet vel tellus. Suspendisse in mollis lacus.</p>
      </Content>

    </div>
  )
}
