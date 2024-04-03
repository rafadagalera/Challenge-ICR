import "./style.css";

const Header = () => {
    return (
        <header className="container">
            <h1>logo</h1>
            <nav>
                <ul>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Criar meu personagem</p>
                    </li>
                    <li>
                        <p>Meu perfil</p>
                    </li>
                    <li>
                        <p>Amigos da saúde</p>
                    </li>
                    <li>
                        <p>Ajuda</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
