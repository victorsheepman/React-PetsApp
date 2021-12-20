import React from 'react'

export const Category = ({title, state, img, onChange}) => (
        <button  className={state ? 'category__active' : 'category'} onClick={onChange}>
            <figure className='option__image'>
                <img src={img} alt="" />
            </figure>
            <p className='body-1'>{title}</p>
        </button>
    )
