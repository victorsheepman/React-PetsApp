import React, { useContext} from 'react'
import {Category} from '../../components/Category/Category'
import { AppContext } from '../../Context/AppContext'
import { useShow } from '../../Hooks/useShow';

export const Header = () => {
    const {setCategory} = useContext(AppContext);
    const {catShow, dogShow, setCatShow, setDogShow} = useShow();

    const ClickDog = ()=>{
        setDogShow(true);
        setCatShow(false);
        setCategory('dog')
    }
    const ClickCat = () =>{
        setDogShow(false);
        setCatShow(true);
        setCategory('cat')
    }

    return (
        <header className='header'>
            <p className='sub-1'>Categorías de mascotas</p>
            <div className='header__category'>
                <Category  title='Gatos' img='assets/images/Categoria=Gatos.png' state={catShow} onChange={ClickCat}/>
                <Category  title='Perros' state={dogShow} img='assets/images/Categoria=Perros.png'  type='category__active' onChange={ClickDog}/>
            </div>
        </header>
    )
}
