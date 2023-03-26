import { Link } from 'react-router-dom';

function Sobre() {
    return(
        <div>
            <h1>Página sobre a empresa</h1> <br></br>

            <Link to="/">Página Home</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Sobre;