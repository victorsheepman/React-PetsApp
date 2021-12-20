import React, { useState } from 'react'
import {useNearScreen} from '../../Hooks/useNearScreen';
import {ModalPet} from '../../Container/ModalPet/ModalPet';
export const Card = ({ firstName, raza, img, sex, age,  description,  personality, id, like}) => {
    const [show, element] = useNearScreen(); 
    const [modal, setModal] = useState(false);

    return (
        <>
        <figure className='card' ref={element} onClick={()=>setModal(true)}>
            {
                show && <>
                            <img src={img} alt="" />
                            <div className='card__body'>
                                <p className='body-2-bold'>{firstName}</p>
                                <span className='body-1'>{raza}</span>
                            </div>
                        </>
            } 
           
         
        </figure> 
        {
            modal && <ModalPet 
                        setState={setModal} 
                        firstName={firstName} 
                        raza={raza} 
                        age={age} 
                        sex={sex}  
                        description={ description}
                        personality={ personality}
                        id={id}
                        like={like}
                    />
        }
        </>
    )
}
