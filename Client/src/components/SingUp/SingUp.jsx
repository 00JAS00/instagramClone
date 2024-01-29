const SignUp= ()=>{
    return(
    <form method="post">
        <span>Regístrate para ver fotos y videos de tus amigos.</span>
        
        <button type="button">Iniciar sesión con Facebook</button>
        
        <label>
            <span>Número de celular o correo electrónico</span>
            <input type="text" name="emailOrPhone" aria-label="Número de celular o correo electrónico" />
        </label>
        
        <label>
            <span>Nombre completo</span>
            <input type="text" name="fullName" aria-label="Nombre completo"  />
        </label>
        
        <label>
            <span>Nombre de usuario</span>
            <input type="text" name="username" aria-label="Nombre de usuario"   />
        </label>
        
        <label>
            <span>Contraseña</span>
            <input type="password" name="password" aria-label="Contraseña"   />
        </label>
        
        <p>
            Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a InstagramClone. 
            Al registrarte, aceptas nuestras Condiciones,la Política de privacidad y la Política de cookies. 
        </p>
        
        <button disabled="" type="submit">Registrarte</button>
    </form>

        )
}
export default SignUp