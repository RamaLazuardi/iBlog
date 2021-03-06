
export default function LoginCom(){
    return (
        <>
            <div className="container">
                <main className="form-signin">
                    <form>
                        <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Login</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Sandi</label>
                        </div>

                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Ingat saya
                        </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </main>
            </div>
        </>
    )
}