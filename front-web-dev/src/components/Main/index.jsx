import { useNavigate } from "react-router-dom";
import "./style.css";

const Main = () => {
    const navigate = useNavigate();

    return (
        <main className="container">
            <button onClick={() => navigate("/create-avatar")}>Criar avatar</button>
        </main>
    );
};

export default Main;
