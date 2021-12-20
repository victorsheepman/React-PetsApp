import React from 'react'
import { useNavigate } from 'react-router-dom'
import Helmet from 'react-helmet';
export const Perfil = ({setLogin, login}) => {
    const navigate = useNavigate();
    const handleClick =()=>{
        setLogin(!login);
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate( lastPath, {
            replace: true
        });
    }
    

    return (
        <div className='perfil'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pets-App Perfil</title>
                <meta name="description" content="pets-app Perfil de usuario" />
            </Helmet>
            <h1>perfil</h1>
            <div className='perfil__wrapper'>
                <div className='perfil__user'>
                    <figure>
                        <img src="assets/images/user-3.jpg" alt="" />
                    </figure>
                    <p className='body-2'>Victor Marquez</p>
                </div>
                <button className='perfil__button' onClick={handleClick}>
                    {
                       login ? 'Salir' : 'Entrar'
                    }
                </button>
            </div>
        </div>
    )
}
