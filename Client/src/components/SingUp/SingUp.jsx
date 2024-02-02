import style from './SingUp.module.css'
import instagramLogo from '../../assets/Logo-Instagram.webp'

//redux
import {singUp} from '../../redux/actions/userActions'

//* react-redux
import {useSelector, useDispatch} from 'react-redux'

const SignUp= ()=>{
    const user = useSelector(state=> state.user)
    console.log(user)

    
    return(
    <div className={style.container}>
        <div className={style.logoContainer}>
                <img src={instagramLogo} alt="app logo" className={style.logo}/>
            </div>
        <form className={style.form}>
            <div className={style.labels}>
                <span className={style.subtitle}>Regístrate para ver fotos y videos  de tus amigos.</span>
            </div>
            <div className={style.labels}>
                <a  className={style.btnFacebook}>Iniciar sesión con Facebook</a>
            </div>
            <div className={style.labels}>
                <div className={style.orContainer}>
                    <div className={style.lines}></div>
                    <div className={style.orText}>o</div>
                    <div className={style.lines}></div>
                </div>
            </div>
            <div className={style.labels}>
                <label>
                    
                    <input className={style.inputs}type="text" name="emailOrPhone" placeholder="Número de celular o correo electrónico" />
                </label>
            </div>
            <div className={style.labels}>
                <label>
                    
                    <input className={style.inputs}type="text" name="fullName" placeholder="Nombre completo"  />
                </label>
            </div>
            <div className={style.labels}>
                <label>
                    
                    <input className={style.inputs}type="text" name="username" placeholder="Nombre de usuario"   />
                </label>
            </div>
            <div className={style.labels}>
            <label>
                <input className={style.inputs}type="password" name="password" placeholder="Contraseña"   />
            </label>
            </div>

            <div className={style.labels}>
                <p className={style.terms}>
                    Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a InstagramClone. <br /> <br />
                    Al registrarte, aceptas nuestras Condiciones,la Política de privacidad y la Política de cookies. 
                </p>
            </div>
            <a className={style.btnSingup}>Registrarte</a>
        </form>
    </div>
        )
}
export default SignUp