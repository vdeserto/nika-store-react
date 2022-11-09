import React from "react";

class Login extends React.Component{
    render(){
        return(
            <main className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Login</h3>
                        <form action="/api/login" method="post">
                            <input type="email" name="email" id="emailLogin" />
                            <input type="password" name="password" id="pwdLogin" />
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <h3>Cadastro</h3>
                        <form action="/api/register" method="post">
                            <input type="email" name="email" id="emailRegister" />
                            <input type="password" name="password" id="pwdRegister" />
                            <button type="submit">Cadastrar-se</button>
                        </form>
                    </div>
                </div>
            </main>
        )

    }
}

export default Login;