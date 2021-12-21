import React, { useContext} from 'react'
import { Card } from '../../components/Card/Card';
import {AppContext} from '../../Context/AppContext';

export const PetList = () => {
    const { category, state} = useContext( AppContext )
    const pets = state;
    const data = pets.filter(e => e.pet === category);
    return (
        <div className='petlist'>
            {
                data.map(e=>(
                    <Card key={e.id} {...e}/>
                ))
            }
        </div>
    )
}
