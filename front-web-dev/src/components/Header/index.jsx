import { useNavigate } from "react-router-dom";
import amigosSaudeLogo from "../../assets/amigos-saude-logo.png"
import "./style.css";

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="container">
            <img src={amigosSaudeLogo} alt="" />
            <nav>
                <ul>
                    <li>
                        <p onClick={() => navigate('/')}>Home</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/create-avatar')}>Criar meu personagem</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/')}>Amigos da saúde</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/login')}>Meu perfil</p>
                    </li>
                    <li>
                        <p onClick={() => navigate('/')}>Ajuda</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
