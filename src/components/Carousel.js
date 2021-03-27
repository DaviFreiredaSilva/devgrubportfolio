import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import books from '../assets/images/books.jpg'
import developer from '../assets/images/developer.jpg'
import social from '../assets/images/social.jpg'
import Card from './Card'

export default function Carousel() {

  const [itemsState, setItemsState] = useState([
    {
      id: 0,
      title: "Lançamento do livro",
      subTitle: "Facilitando a vida do desenvolvedor",
      imgSrc: books,
      link: "/",
      selected: false
    },
    {
      id: 1,
      title: "Desenvolvedor",
      subTitle: "Novos projetos",
      imgSrc: developer,
      link: "/",
      selected: false
    },
    {
      id: 2,
      title: "Nova rede social",
      subTitle: "Ainda em fase de testes",
      imgSrc: social,
      link: "/",
      selected: false
    },
  ])

 const  handleCardClick = (id, card)=> {

  console.log(id)
    let items = [...itemsState]

    items[id].selected = items[id].selected ? false : true

    items.forEach((item)=> {
      if(item.id !== id) {
        item.selected =false
      }
    })

    setItemsState(items);

  }

  const makeItems = (items) => {
    return items.map(item => {
      return <Card 
              item={item} 
              click = {(e => handleCardClick(item.id, e) )} 
              key={item.id}>

            </Card>
    })
  }

  return (
    <Container fluid={true}>
      <Row className="justify-content-around">
        {makeItems(itemsState)}
      </Row>
    </Container>
  )
}
