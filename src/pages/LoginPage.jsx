import React from 'react'
import { useEffect, useState } from 'react'


const words = [
    "Seguro",
    "Moderno",
    "Rápido",
    "Simples",
    "Inteligente"
];

const LoginPage = () => {

    const [title, setTitle] = useState("");

    const [wordIndex, setWordIndex] = useState(0);

    const [charIndex, setCharIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {

        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {

            if (!isDeleting) {

                setTitle(currentWord.substring(0, charIndex + 1));

                setCharIndex(prev => prev + 1);

                if (charIndex === currentWord.length) {

                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1400);
                }

            } else {

                setTitle(currentWord.substring(0, charIndex - 1));

                setCharIndex(prev => prev - 1);

                if (charIndex === 0) {

                    setIsDeleting(false);

                    setWordIndex(prev =>
                        prev === words.length - 1
                            ? 0
                            : prev + 1
                    );
                }
            }

        }, isDeleting ? 50 : 120);

        return () => clearTimeout(timeout);

    }, [charIndex, isDeleting, wordIndex]);


    return <>
        <div className='login-layout'>
            <div className='login_brand-panel container-background'>


                <div className='login_brand-header'>
                    <a className='login_brand-logo'>
                        <div className='login_brand-icon'>
                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        AuthFlow
                    </a>
                </div>


                <div className='login_brand-hero'>
                    <div className='brand-hero_container-text'>
                        <h1>Acesso<span> {title}</span></h1>
                    </div>
                    <h2>Simples assim.</h2>
                </div>


                <div className='login_brand-features'>
                    <div className="login_feature-item">
                        <div className="login_feature-dot"></div>
                        <span>Autenticação de dois fatores</span>
                    </div>
                    <div className="login_feature-item">
                        <div className="login_feature-dot"></div>
                        <span>Sessões criptografadas end-to-end</span>
                    </div>
                    <div className="login_feature-item">
                        <div className="login_feature-dot"></div>
                        <span>Recuperação de conta em segundos</span>
                    </div>
                </div>
            </div>

            <div className='login_auth-panel'>
                <div className='login_auth-container'>
                    <div className='login_auth-view'>
                        <div className='login_auth-header'>
                            <h2>Bem-vindo de volta</h2>
                        </div>

                        <div className='login_form-group_bottom form-group'>
                            <label htmlFor='login-email'>E-mail</label>
                            <input type="email" id='login-email' placeholder='meuEmail@gmail.com' autoComplete='email' />
                            <span className='form-group_error' id='err-email'>Insira um e-mail válido.</span>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='login-password'>Senha</label>
                            <div className='login_auth_form-group_wrapper'>
                                <input type="email" id='login-password' placeholder='••••••••' autoComplete='current-password' />
                                <span className="login_auth_form-group_input-icon" id="toggle-pwd" title="Mostrar senha"></span>
                            </div>
                            <span className='form-group_error' id='err-password'>Insira sua senha.</span>
                        </div>

                        <div className="login_auth_form-options">
                            <label className="form-group_checkbox">
                                <input type="checkbox" id="remember-me" />
                                Lembrar de mim
                            </label>
                            <button className="link-btn" id="go-forgot">Esqueci minha senha</button>
                        </div>

                        <button className="login_auth_btn-primary" id="btn-login">Entrar</button>

                        <div className="login_auth_divider">ou</div>

                        <button className="login_auth_btn-oauth" id="btn-google">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Continuar com Google
                        </button>

                        <div className="login_auth_auth-footer">
                            Não tem conta? <button className="link-btn">Criar conta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LoginPage