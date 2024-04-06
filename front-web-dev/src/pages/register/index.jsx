import { Header } from "../../components/Header";
import { RegisterForm } from "./forms/register-form";
import { StyledRegister } from "./style";

export const Register = () => {
    return (
        <>
            <StyledRegister>
                <Header />

                <div className="main_container">
                    <div className="left_box">
                        <h1>Faça parte do nosso time!</h1>
                    </div>
                    <div className="right_box">
                        <RegisterForm />
                    </div>

                    <div className="hidden">
                        <p>ICONE</p>
                    </div>
                </div>
            </StyledRegister>
        </>
    );
};
