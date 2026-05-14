import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'

import { isValidEmail } from '../utils/validations';



const ANIMATION_TIME = 400;


const RegisterPage = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [animation, setAnimation] = useState('');


    function nextStep() {

        setAnimation('fade-out-left');

        setTimeout(() => {

            setStep(prev => prev + 1);

            setAnimation('fade-in-right');

        }, ANIMATION_TIME);
    }

    function prevStep() {

        setAnimation('fade-out-right');

        setTimeout(() => {

            setStep(prev => prev - 1);

            setAnimation('fade-in-left');

        }, ANIMATION_TIME);
    }


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    function handleEmailChange(e) {

        const value = e.target.value;
        setEmail(value);

        if (!value.trim()) {
            setEmailError('');
            return;
        }

        if (!isValidEmail(value)) {
            setEmailError('Insira um e-mail válido.');
            return;
        }

        setEmailError('');
    }

    function handleContinue() {

        if (step === 0) {

            if (!email.trim()) {
                setEmailError('Digite seu e-mail.');
                return;
            }

            if (!isValidEmail(email)) {
                setEmailError('Insira um e-mail válido.');
                return;
            }
        }

        nextStep();
    }




    return <>
        <div className='register-container container-background'>
            <div className='register-card'>

                <div className='register-card-progress'>
                    <div className={`pg ${step === 0 ? 'active' : ''} ${step > 0 ? 'done' : ''}`}></div>
                    <div className={`pg ${step === 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}></div>
                    <div className={`pg ${step === 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}`}></div>
                    <div className={`pg ${step === 3 ? 'active' : ''} ${step > 3 ? 'done' : ''}`}></div>
                </div>

                {step === 0 && (
                    <div className={`register-step ${animation}`}>

                        <h2>Novo Cadastro</h2>
                        <p>Comece pelo seu endereço de e-mail</p>

                        <div className={`form-group ${emailError ? 'error' : ''} ${email && !emailError ? 'success' : ''}`}>
                            <label htmlFor="email">E-mail</label>

                            <input
                                type="email"
                                id='email'
                                placeholder='meuEmail@gmail.com'
                                value={email}
                                onChange={handleEmailChange}
                            />

                            <span className='form-group_error'>{emailError}</span>
                        </div>

                        <button
                            className='register-card-btn'
                            onClick={handleContinue}
                        >
                            Continuar
                        </button>

                        <div className='register-card-divider'>ou</div>

                        <button className='btn-google' id='btnGoogle'>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Continuar com Google
                        </button>

                        <div className='register-card-footer'>
                            Já tem conta?
                            <button className='link-btn' onClick={() => navigate("/auth/login")}>Entrar</button>
                        </div>

                    </div>
                )}


                {step === 1 && (
                    <div className={`register-step ${animation}`}>

                        <h2>Confirme seu e-mail</h2>
                        <p>Enviamos um e-mail para <b>{email}</b></p>
                        
                    </div>
                )}

            </div>
        </div>
    </>
}

export default RegisterPage