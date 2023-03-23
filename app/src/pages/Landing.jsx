import '../styles/Landing.css'
import { Link } from 'react-router-dom';


export default function Landing() {
    return (
    <div id='container'>
        <div id='cardLand'>
            <h2 id='titleLand'>Bienvenidos a un paseo por los rincones de Sevilla</h2>
            <p id='parrLand'>En esta web sólo se tiene la pretensión de acercar Sevilla a quien la desee ver desde los ojos de alguien a quien le apasiona perderse por sus avenidas pero, sobre todo, por sus callejuelas, descubrir el paso de la historia y de la vida en cada esquina, y el aporte que cada cultura ha hecho, dejando su huella en la ciudad, enriqueciéndola y embelleciéndola</p>
            <Link to="/gallery"><button>Ver Sevilla</button></Link>
        </div>
    </div>
    )
}