import React from 'react'

export const Chat = ({setState}) => (
        <div className='chat' onClick={() => setState(true)}>
            <figure className='chat__profile'>
                <img src="assets/images/user-1.jpg" alt="" />
            </figure>
            <div className='chat__body'>
                <p className='body-1'>Maria Dolores</p>
                <p className='body-2'> ¡Hola! claro, podemos acordar un lugar y hora para que conoscas...</p>
            </div>
            <figure className='chat__icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z" fill="black"/>
                </svg>
            </figure>
        </div>
)

