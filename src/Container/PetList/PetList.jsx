import React, { useContext, useEffect } from 'react'
import { Card } from '../../components/Card/Card';
import {AppContext} from '../../Context/AppContext';

const PetListPage = () => {
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
export const PetList=React.memo(PetListPage);
