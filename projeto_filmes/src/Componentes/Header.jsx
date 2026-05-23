import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
    return(
        <header className="header">
            <h1>MockBuster Movies</h1>
            <ul className="nav-menu">
                <li>
                    <Link to="/" >Inicio</Link>
                </li>
                <li>
                    <Link to="/read">Ler</Link></li>
                <li>
                    <Link to="/create">Criar</Link>
                </li>
                <li>
                    <Link to="/update">Alterar</Link>
                </li>
                <li>
                    <Link to="/delete">Apagar</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;