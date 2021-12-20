import React, { useContext } from 'react'
import { Character } from '../../components/Character/Character'
import { Personality } from '../../components/Personaity/Personality'
import { User } from '../../components/User/User'
import { AppContext } from '../../Context/AppContext'
export const ModalPet = ({setState,firstName, raza,age, sex,  description,  personality, id, like}) => {
    const {dispatch} =useContext(AppContext)
    const handleClick = ()=>{ 
        dispatch({
            type:'toggle',
            payload:id
        })
    }
    return (
        <div className='modalPet'>
            <div className='modalPet__exit' onClick={()=>setState(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C4.09839 12.5126 4.00076 12.2579 4 12.003C4 12.002 4 12.001 4 12C4 11.999 4 11.998 4 11.997C4.0004 11.8625 4.02735 11.7343 4.07588 11.6172C4.12432 11.5001 4.19595 11.3904 4.29078 11.295M4.29316 11.2926L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289" fill="black"/>
                </svg>
            </div>
            <div className='modalPet__wrapper'>
                <div className='modalPet__info'>
                    <div className='modalPet__info__header'>
                        <h1>{firstName}</h1>
                        <figure>
                            <img src={sex} alt="" />
                        </figure>
                        <button onClick={handleClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={like ? 'black' : 'white'} xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className='modalPet__info__place'>
                        <figure>
                            <img src="assets/icons/Property 1=map-pin.svg" alt="" />
                        </figure>
                        <p className='body-2'>
                            4140 Parker Rd. Allentown,<br />
                            New Mexico 31134
                        </p>
                    </div>
                    <Character breed={raza} age={age} />
                </div>
                <div className='modalPet__personality'>
                    <h2>Personalidad</h2>
                    <div className='modalPet__personality__container'>
                        {
                            personality.map(p => <Personality {...p} />)
                        }
                        {/*<Personality {...personality[0]} />
                        <Personality img='assets/images/Property 1=Inquieto.png' body='Inquieto' />
                        <Personality img='assets/images/Property 1=Jugueton.png' body='Juguetón' />
                    */}
                    </div>
                   
                </div>
                <article className='modalPet__article'>
                    <h2>Historia de {firstName}</h2>
                    <p className='body-1'>
                        { description}
                    </p>
                </article>
                <User />
            </div>
        </div>
    )
}
