import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledDiv } from "./style";

export const Ajuda = () => {
    return (
        <>
            <Header />

            <StyledDiv className="container">
                <h1>Duvidas?</h1>
                <ul>
                    <li>
                        <h2>Por que vocês fazem isso?</h2>
                        <p>
                            Entendemos que todos nós queremos ser representados,
                            então elaboramos a solução!!! Os amigos da saúde
                            está aqui para ensinar e te confortar, como dizemos,
                            “tamo junto” parceiro!
                        </p>
                    </li>
                    <li>
                        <h2>Como vocês fizeram isso?</h2>
                        <p>
                            Fizemos em parceria com o IcR, o hospital que cuida
                            de vocês, a partir de uma preocupação deles, eles
                            nos solicitaram uma ajudinha. Com esse pedido nos
                            unimos entre amigos e fomos atrás de ajudar o mundo!
                        </p>
                    </li>
                </ul>
            </StyledDiv>

            <Footer />
        </>
    );
};
