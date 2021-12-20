import React, { useState } from 'react';
import { Home } from './pages/home/Home'
import {Messages} from './pages/messages/Messages';
import { AppContext } from './Context/AppContext'
import { initialValue } from './Hooks/InitialValue'
import { Nav } from './components/Nav/Nav'
import {Fav} from './pages/Fav/Fav'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Perfil } from './pages/perfil/Perfil';


export const App = () => {
  const AppValue = initialValue();
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
  
      <AppContext.Provider value={AppValue}>
        <BrowserRouter>
          <Routes>{
            login ? <>
              <Route path='/' element={<Home />} />
              <Route path='/message' element={<Messages/>}/>
              <Route path='/fav' element={<Fav />}/>
              <Route path='/user' element={<Perfil setLogin ={setLogin} login={login} />}/>
            </>
            : <Route path='/user' element={<Perfil setLogin ={setLogin} login={login} />}/>
            }
             <Route
              path="*"
              element={<Navigate to="/user" />}
            /> 
          </Routes>
          <Nav />
        </BrowserRouter>
      </AppContext.Provider>
    
  )
}

