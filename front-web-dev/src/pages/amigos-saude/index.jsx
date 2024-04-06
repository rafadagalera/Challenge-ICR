import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledDiv } from "./style";

export const AmigosSaude = () => {
    return (
        <>
            <Header />
            <StyledDiv>
                <h1>Quem somos nós?</h1>
                <p className="p_description">
                    Somos quatro amigos, com intuito de ajudar as crianças do
                    IcR e disponibilizar a criação de ávatares para aulas de
                    exames caso você tenha duvida, estamos aqui para ajudar!
                </p>
                <p>Respondendo...</p>
                <p>
                    <span>Somos os amigos da saude!</span>
                </p>
            </StyledDiv>
            <Footer />
        </>
    );
};
