import { Header } from "../../components/Header";
import { LoginForm } from "./forms/login-form";
import { StyledLogin } from "./style";

export const Login = () => {
    return (
        <StyledLogin>
            <Header />

            <div className="main_container">
                <div className="left_box">
                    <h1>Faça parte do nosso time!</h1>
                </div>
                <div className="right_box">
                    <LoginForm />
                </div>

                <div className="hidden">
                    <p>ICONE</p>
                </div>
            </div>
        </StyledLogin>
    );
};
