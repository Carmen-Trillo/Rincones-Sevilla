import '../styles/Header.css'
import '../../src/index.css'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Add from '../assets/img/add.png'

export default function Header() {
  return (
    <div id='header'>
      <div>
          <h1>Rincones de Sevilla</h1>
      </div>
      <div>
      <nav className="navbar">
        <ul>
          <li><Link to={`/`}style={{height: '3vh', fontFamily: 'Jmh', textDecoration: 'none', color: 'white'}}>Inicio</Link></li>
          <li><Link to={`/Gallery`} style={{height: '3vh', fontFamily: 'Jmh', textDecoration: 'none', color: 'white'}}>Galería</Link></li>
          <li><Link to={`/Contact`} style={{height: '3vh', fontFamily: 'Jmh', textDecoration: 'none', color: 'white'}}>Contacto</Link></li>
          <li><Link style={{textDecoration:'none'}} variant="outline-light" to={`/NewPhoto`}><Button style={{height: '4vh', fontFamily: 'Jmh', width: '6vw', display: 'flex', flexDirection: 'row'}} variant="outline-light"><img src={Add} alt="añadir foto"/><p>  Fotos</p></Button></Link></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}
