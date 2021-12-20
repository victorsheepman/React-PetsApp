import React,{ useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Card } from '../../components/Card/Card';
import Helmet from 'react-helmet';

export const Fav = () => {
    const {state} = useContext(AppContext);
    
    const pets = state;
    const data = pets.filter(e=>e.like === true);

    return (
        <div className='fav'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pets-App Favoritos</title>
                <meta name="description" content="pets-app tus favoritos" />
            </Helmet>
            <h1>Favoritos</h1>
            <div className='petlist'>
                {
                    data.map(e=>(
                        <Card key={e.id} {...e}/>
                    ))
                }
            </div>
        </div>
    )
}
