import { Link } from 'react-router-dom';

function Erro() {
    return(
        <div>
            <h2>Ops, parece que essa página não existe</h2>

            <span>Encontramos esses resultados:</span>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contatos">Contatos</Link>
        </div>
    );
}

export default Erro;