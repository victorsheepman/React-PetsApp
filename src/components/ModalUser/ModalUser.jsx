import React from 'react'

export const ModalUser = ({setState}) => (
        <div className='modaluser'>
            <div className='modaluser__header'>
                <figure>
                    <img src="assets/images/user-1.jpg" alt="" />
                </figure>
                <p className='body-1'>Maria Dolores</p>
            </div>
            <button className='modaluser__exit' onClick={()=>setState(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C4.09839 12.5126 4.00076 12.2579 4 12.003C4 12.002 4 12.001 4 12C4 11.999 4 11.998 4 11.997C4.0004 11.8625 4.02735 11.7343 4.07588 11.6172C4.12432 11.5001 4.19595 11.3904 4.29078 11.295M4.29316 11.2926L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289" fill="white"/>
                </svg>
            </button>
            <div className='modaluser__wrapper'>
                <div className='modaluser__chat'>
                    <p className='body-2'>¡Hola! Me encantaría adoptar a Rocky.</p>
                </div>
                <div className='modaluser__chat--black'>
                    <p className='body-2'>¡Hola! claro, podemos acordar un lugar y hora para que conoscas a Rocky.</p>
                </div> 
            </div> 
            <input type="text"  />
        </div>
)
