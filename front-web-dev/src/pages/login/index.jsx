import Header from '../../components/Header'
import './style.css'
import { LoginForm } from './forms/login-form'

export const Login = () => {
    return(
        <>
            <Header />

            <div className='container main_container'>
                <div className='left_box'>
                    <h1>Faça parte do nosso time!</h1>
                </div>
                <div className="right_box">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}
