import React from 'react'

export const Button = ({title, onClick, type}) => (
    <button className={type} onClick={onClick}>
        {title}
    </button>
)
