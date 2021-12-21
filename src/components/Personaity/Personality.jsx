import React from 'react'

export const Personality = ({title, src}) => (

        <div className='personality'>
            <figure>
                <img src={src} alt="" />
            </figure>
            <p className='body-2'>{title}</p>
        </div>

)

