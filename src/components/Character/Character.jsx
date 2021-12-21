import React from 'react'

export const Character = ({breed, age}) => (
    <div className='character'>
        <figure>
            <img src="assets/icons/Property 1=raza.svg" alt="" />
        </figure>
        <p className='body-2'>{breed}</p>
        <figure className='character__edad'>
            <img src="assets/icons/Property 1=edad.svg" alt="" />
        </figure>
        <p className='body-2'>{age} Meses</p>
    </div>
)

