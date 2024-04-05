import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'

export const Login = () => {
    const navigate = useNavigate()

    return(
        <>
            <Header />
            <div className='container'>
                <div className='login_container'>
                    <h3>Login</h3>

                    <form>
                        <div>
                            <label htmlFor="email_input">Email</label>
                            <input type="email" id='email_imput' placeholder='Email'/>
                        </div>

                        <div>
                            <label htmlFor="password_input">Senha</label>
                            <input type="password" id='password_input' placeholder='Senha'/>
                        </div>

                        <button type='submit'>Entrar</button>
                    </form>
                    <p>OU</p>
                    <button onClick={() => navigate("/register")}>Criar conta</button>
                </div>
            </div>
            <Footer />
        </>
    )
}


