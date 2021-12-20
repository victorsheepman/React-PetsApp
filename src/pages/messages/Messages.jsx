import React, { useState } from 'react'
import { Chat } from '../../components/Chat/Chat'
import { ModalUser } from '../../components/ModalUser/ModalUser';
import Helmet from 'react-helmet';
export const Messages = () => {
    const [show, setShow]= useState(false);
    return (
        <div className='message'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pets-App tus Chats</title>
                <meta name="description" content="pets-app Chats " />
            </Helmet>
            <h1>message</h1>
            <Chat setState={setShow}/>
            {
                show && <ModalUser setState={setShow} />
            }
            
        </div>
    )
}
