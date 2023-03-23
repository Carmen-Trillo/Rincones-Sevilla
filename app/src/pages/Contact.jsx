import ContactForm from '../components/ContactForm';
import Instagram from '../assets/img/instagram.png';
import Linkedin from '../assets/img/linkedin.png';
import '../styles/Contact.css';
import '../../src/index.css';

export default function Contact() {
    return (
    <>
    <div id='container'>
        <div id='form'>
            <div id='formText'>
            <h4>Puedes ponerte en contacto conmigo a través de correo electrónico o seguirme en redes</h4>
            
            <ContactForm style={{}} />
            </div>
            <div id='socialContact'>
                <a title="instagram" href="" target="_blank"><img src={Instagram} alt="instagram"/></a>
                <a title="linkedin" href="" target="_blank"><img src={Linkedin} alt="linkedin"/></a>
            </div>
            
        </div>
    </div>
    </>
    )
}