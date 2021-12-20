import React from 'react'
import { NavLink } from 'react-router-dom'
export const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink  className={(navData) => navData.isActive ? "nav__selected" : "nav__a" } to='/'>
                <figure className='nav__img'>
                    <img src="assets/icons/Property 1=home.svg" alt="" />
                </figure>
                
                <p className='body-2'>Home</p>
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav__selected" :  "nav__a" } to='/message'>
                <figure className='nav__img'>
                    <img src="assets/icons/Property 1=message-circle.svg" alt="" />
                </figure>
                
                <p className='body-2'>Mensajes</p>
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav__selected" :  "nav__a" } to='/fav'>
                <figure className='nav__img'>
                    <img src="assets/icons/Property 1=heart.svg" alt="" />
                </figure>
                
                <p className='body-2'>Favoritos</p>
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav__selected" :  "nav__a" } to='/user'>
                <figure className='nav__img'>
                    <img src="assets/icons/Property 1=user.svg" alt="" />
                </figure>
                
                <p className='body-2'>Perfil</p>
            </NavLink>
        </nav>
    )
}
