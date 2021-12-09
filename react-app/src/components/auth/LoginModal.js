import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal'
import LoginForm from './LoginForm';
import {login} from '../../store/session';


function LoginModal(){
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const demoLogin = async() => {
        const demoUser = {credential: "demo@aa.io", password: "password"}
        await dispatch(login(demoUser))
    }

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)}>Login</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
        <>
        <button onClick={demoLogin}>Demo Login</button>
        </>
        </div>
    )
}

export default LoginModal