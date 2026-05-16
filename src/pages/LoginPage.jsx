import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '../components/ui/LoadingButton/LoadingButton';

import { Google } from '../utils/icons';

const WORDS = ['Seguro', 'Moderno', 'Rápido', 'Simples', 'Inteligente'];

function useTypewriter(words) {
    const [title, setTitle] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];
        const delay = isDeleting ? 50 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setTitle(word.substring(0, charIndex + 1));
                setCharIndex(p => p + 1);
                if (charIndex === word.length) setTimeout(() => setIsDeleting(true), 1400);
            } else {
                setTitle(word.substring(0, charIndex - 1));
                setCharIndex(p => p - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex(p => (p === words.length - 1 ? 0 : p + 1));
                }
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return title;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const title = useTypewriter(WORDS);
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin() {
        // Exemplo de uso: setIsLoading(true) → chamada API → setIsLoading(false)
    }

    return (
        <div className="login-layout">
            {/* Painel esquerdo — branding */}
            <div className="login_brand-panel container-background">
                <div className="login_brand-header">
                    <a className="login_brand-logo">
                        <div className="login_brand-icon">
                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        AuthFlow
                    </a>
                </div>

                <div className="login_brand-hero">
                    <div className="brand-hero_container-text">
                        <h1>Acesso<span> {title}</span></h1>
                    </div>
                    <h2>Simples assim.</h2>
                </div>

                <div className="login_brand-features">
                    {['Autenticação de dois fatores', 'Sessões criptografadas end-to-end', 'Recuperação de conta em segundos'].map(feat => (
                        <div key={feat} className="login_feature-item">
                            <div className="login_feature-dot" />
                            <span>{feat}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Painel direito — formulário */}
            <div className="login_auth-panel">
                <div className="login_auth-container">
                    <div className="login_auth-header">
                        <h2>Bem-vindo de volta</h2>
                    </div>

                    <div className="login_form-group_bottom form-group">
                        <label htmlFor="login-email">E-mail</label>
                        <input type="email" id="login-email" placeholder="meuEmail@gmail.com" autoComplete="email" />
                        <span className="form-group_error">Insira um e-mail válido.</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="login-password">Senha</label>
                        <div className="login_auth_form-group_wrapper">
                            <input type="password" id="login-password" placeholder="••••••••" autoComplete="current-password" />
                        </div>
                        <span className="form-group_error">Insira sua senha.</span>
                    </div>

                    <div className="login_auth_form-options">
                        <label className="form-group_checkbox">
                            <input type="checkbox" id="remember-me" />
                            Lembrar de mim
                        </label>
                        <button className="link-btn">Esqueci minha senha</button>
                    </div>

                    <LoadingButton
                        className="login_auth_btn-primary"
                        isLoading={isLoading}
                        onClick={handleLogin}
                    >
                        Entrar
                    </LoadingButton>

                    <div className="divider">ou</div>

                    <button className="btn-google">
                        <Google />
                        Continuar com Google
                    </button>

                    <div className="login_auth_auth-footer">
                        Não tem conta?{' '}
                        <button className="link-btn" onClick={() => navigate('/auth/register')}>
                            Criar conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
