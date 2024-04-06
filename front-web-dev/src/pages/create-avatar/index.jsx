import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AvatarDiv, StyledDiv } from "./style";
import avatar from "../../assets/Screenshot_2.png";

export const CreateAvatar = () => {
    return (
        <>
            <Header />1
            <StyledDiv className="container">
                <AvatarDiv>
                    <img src={avatar} alt="" />
                    <form>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" />
                        </div>
                        <div>
                            <label htmlFor="idade">Idade</label>
                            <input type="text" id="idade" />
                        </div>
                        <div>
                            <label htmlFor="filme">Filme favorito</label>
                            <input type="text" id="filme" />
                        </div>

                        <textarea
                            name="sobre_voce"
                            id=""
                            cols="50"
                            rows="10"
                            placeholder="Escreva aqui..."
                        ></textarea>

                        <button>Finalizar</button>
                    </form>
                </AvatarDiv>
            </StyledDiv>
            <Footer />
        </>
    );
};
