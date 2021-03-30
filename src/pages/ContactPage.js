import axios from 'axios';
import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';

export default function ContactPage({title, subTitle, text}) {

  const [formState, setFormState] = useState({
    name:"",
    email:"",
    message:"",
    disabled: false,
    emailSent: null,
  })

  const handleChange = (event)=>{
    console.log(event)

    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const targetName = target.name

    setFormState({targetName: value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    setFormState({disabled: true})

    axios.post('http://localhost:3030/api/email', formState)
      .then(res=> {
        if(res.data.success){
          setFormState({
            disabled: false,
            emailSent: true
          })
        }else{
          setFormState({
            disabled: false,
            emailSent: false
          })
        }
      })
      .catch(err=> {
        setFormState({
          disabled: false,
          emailSent: false
        })
      })
  }

  return (
    <div>
      <Hero title={title}/>

      <Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Nome completo</Form.Label>
            <Form.Control id="full-name" name="name" type="text" value={formState.name} onChange={handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control id="email" name="email" type="text" value={formState.email} onChange={handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Mensagem</Form.Label>
            <Form.Control id="message" name="message" as="textarea" rows="3" value={formState.message} onChange={handleChange}/>
          </Form.Group>

          <Button className="d-inline-block" variant="primary" type="submit" disabled={formState.disabled}>Enviar mensagem</Button>
        
          {formState.emailSent === true && <p className="d-inline success-msg">Email enviado.</p>}
          {formState.emailSent === false && <p className="d-inline err-msg">Erro no envio da mensagem.</p>}
        </Form>
      </Content>
    </div>
  )
}
