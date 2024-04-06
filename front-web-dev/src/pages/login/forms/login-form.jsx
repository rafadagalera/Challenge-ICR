import { useNavigate } from "react-router-dom";
import { StyledDiv } from "./style";

export const LoginForm = () => {
    const navigate = useNavigate()
    
    return (
        <StyledDiv>
            <h2>Login</h2>

            <form>
                <div>
                    <label htmlFor="email_input">Email:</label>
                    <input
                        type="email"
                        id="email_input"
                        placeholder="Digite seu email"
                    />
                </div>

                <div>
                    <label htmlFor="password_input">Senha:</label>
                    <input
                        type="password"
                        id="password_input"
                        placeholder="Digite sua senha"
                    />
                </div>

                <button type="submit">CONECTAR</button>
            </form>
            <p className="p_recovery_password">
                Esqueceu a senha? <span>Redefinir senha.</span>
            </p>
            <div className="register_div">
                <p>ou</p>
                <button onClick={() => {navigate("/register")}}>Cadastre-se</button>
            </div>
        </StyledDiv>
    );
};
