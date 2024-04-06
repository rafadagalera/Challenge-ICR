import { StyledDiv } from "./style";

export const RegisterForm = () => {
    return (
        <StyledDiv>
            <h3>Cadastro</h3>

            <form>
                <div>
                    <label htmlFor="nome_input">Nome</label>
                    <input
                        type="password"
                        id="nome_input"
                        placeholder="Senha"
                    />
                </div>

                <div>
                    <label htmlFor="email_input">Email</label>
                    <input type="email" id="email_imput" placeholder="Email" />
                </div>

                <div>
                    <label htmlFor="password_input">Senha</label>
                    <input
                        type="password"
                        id="password_input"
                        placeholder="Senha"
                    />
                </div>

                <button type="submit">FINALIZAR CADASTRO</button>
            </form>
            <p className="p_recovery_password">
                Ja tem uma conta?<span> Conecte-se</span>
            </p>
        </StyledDiv>
    );
};
