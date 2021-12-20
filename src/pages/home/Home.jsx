import React, {useRef} from 'react'
import { Header } from '../../Container/Header/Header'
import { PetList } from '../../Container/PetList/PetList'
import Helmet from 'react-helmet'
export const Home = () => {

    return (
        <section className='home'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Pets-App</title>
                <meta name="pets-app" content="pets-app home" />
            </Helmet>
            <div className='home__title'>
                <h1>Adopta una adorable mascota</h1>
            </div>
           <Header /> 
           <PetList />
        </section>
    )
}
