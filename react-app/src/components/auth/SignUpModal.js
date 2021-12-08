import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignUpForm from './LoginForm';
import {signUp} from '../../store/session';


function SignUpModal(){
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)


    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm/>
                </Modal>
            )}
        </>
        </div>
    )
}

export default SignUpModal
