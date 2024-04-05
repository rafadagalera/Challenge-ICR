import './style.css'

export const LoginForm = () => {
    return(
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

                <button type='submit'>Conectar</button>
            </form>
            <p className='p_recovery_password'>Esqueceu a senha? <span>Redefinir senha.</span></p>
        </div>
    )
}
