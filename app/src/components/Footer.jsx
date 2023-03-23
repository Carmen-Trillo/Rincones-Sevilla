import '../styles/Footer.css';
import '../../src/index.css';
import Instagram from '../assets/img/instagram.png';
import Linkedin from '../assets/img/linkedin.png';


export default function Footer() {
    return (
        <div id='footer'>
            <div id='social'>
                <a title="instagram" href="" target="_blank"><img src={Instagram} alt="instagram"/></a>
                <a title="linkedin" href="" target="_blank"><img src={Linkedin} alt="linkedin"/></a>
            </div>
            <div>
                <p id='copyright'>©Copyright <strong>Rincones de Sevilla</strong>. Todos los derechos reservados</p>
            </div>
        </div>
    )
}