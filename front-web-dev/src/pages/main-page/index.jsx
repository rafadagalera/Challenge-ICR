import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { HomeContainer, StyledDiv } from "./style";


export const MainPage = () => {
    return(
        <>
            <Header />
            <StyledDiv>
                <HomeContainer>
                        <h1 className='titulo'>Bem vindo ao nosso site!</h1>
                        <p className='text'>Bem-vindo ao nosso mundo de aprendizado hospitalar interativo! Aqui, pacientes infantis criam avatares para explorar experiências educativas únicas. Nossa plataforma oferece uma jornada lúdica e informativa pelos processos hospitalares, ajudando a desmistificar e confortar. Junte-se a nós enquanto transformamos aprendizado em aventura, garantindo que cada passo seja guiado por diversão e entendimento. Seja bem-vindo ao universo onde o conhecimento é a melhor medicina!</p>
                        <a href="/create-avatar"><button className='create_avatar'>Criar meu personagem</button></a>
                </HomeContainer>
            </StyledDiv>
            <Footer />
        </>
    )
}
