import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  // Estados da página principal--------------------------
  const [title, setTitle] = useState("Davi Freire")
  const [HeaderLinks, setHeaderLinks] = useState([
    {title: 'Home', path: '/'},
    {title: 'Sobre', path: '/about'},
    {title: 'Contato', path: '/contact'},
  ])
  const [home, setHome] = useState(
    {
      title: 'Desenvolvimento inteligente',
      subTitle: 'Projetos que fazem a diferença',
      text: 'Veja meus projetos abaixo'
    }
  )
  const [about, setAbout] = useState(
    {title: 'Sobre mim'}
  )
  const [contact, setContact] = useState(
    {title: 'Vamos negociar'}
  )

  return (
    <Router>

      <Container className="p-0 " fluid={true}>
        
        <Navbar className="border-bottom" bg="transparent" expand="md">

          <Navbar.Brand>Davi Freire</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-aria-controls="navbar-toggle"/>

          <Navbar.Collapse id="navbar-toggle">

          <Nav className="ml-auto">
            {HeaderLinks.map((link)=>(
              <Link className="nav-link" to={link.path}>{link.title}</Link>
            ))}
          </Nav>

          </Navbar.Collapse>

        </Navbar>

        <Route 
          path="/" 
          exact 
          render={()=> <HomePage 
                        title={home.title} 
                        subTitle={home.subTitle} 
                        text={home.text}/>} 
                        />
        <Route path="/about" render={()=><AboutPage title={about.title}/>}/>
        <Route path="/contact" render={()=><ContactPage title={contact.title}/>}/>
        <Footer/>

      </Container>
      
    </Router>
  );
}

export default App;
