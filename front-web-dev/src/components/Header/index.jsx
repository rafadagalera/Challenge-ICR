import { useNavigate } from "react-router-dom";
import amigosSaudeLogo from "../../assets/amigos-saude-logo.png";
import { StyledHeader } from "./style";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader className='container'>
            <img src={amigosSaudeLogo} alt="" className=''/>
            <nav>
                <ul>
                    <li>
                        <p onClick={() => navigate("/")}>Home</p>
                    </li>
                    <li>
                        <p onClick={() => navigate("/create-avatar")}>
                            Criar meu personagem
                        </p>
                    </li>
                    <li>
                        <p onClick={() => navigate("/amigos-saude")}>
                            Amigos da saúde
                        </p>
                    </li>
                    <li>
                        <p onClick={() => navigate("/login")}>Meu perfil</p>
                    </li>
                    <li>
                        <p onClick={() => navigate("/ajuda")}>Ajuda</p>
                    </li>
                </ul>
            </nav>

            <div className='icone_div'>
                <p>ICONE</p>
            </div>
        </StyledHeader>
    );
};
