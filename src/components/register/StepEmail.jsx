import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail } from '../../utils/validations';
import { LoadingButton } from '../ui/LoadingButton/LoadingButton';

import { Google } from '../../utils/icons';

export function StepEmail({ animation, onContinue }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (!value.trim()) { setEmailError(''); return; }
        setEmailError(isValidEmail(value) ? '' : 'Insira um e-mail válido.');
    }

    function handleContinue() {
        if (!email.trim()) { setEmailError('Digite seu e-mail.'); return; }
        if (!isValidEmail(email)) { setEmailError('Insira um e-mail válido.'); return; }

        // Passe `setIsLoading` junto com o e-mail para o pai controlar o loading
        onContinue(email, setIsLoading);
    }

    return (
        <div className={`register-step ${animation}`}>
            <h2>Novo Cadastro</h2>
            <p>Comece pelo seu endereço de e-mail</p>

            <div className={`form-group ${emailError ? 'error' : ''} ${email && !emailError ? 'success' : ''}`}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="meuEmail@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <span className="form-group_error">{emailError}</span>
            </div>

            <LoadingButton isLoading={isLoading} onClick={handleContinue}>
                Continuar
            </LoadingButton>

            <div className="divider">ou</div>

            <button className="btn-google">
                <Google />
                Continuar com Google
            </button>

            <div className="register-card-footer">
                Já tem conta?
                <button className="link-btn" onClick={() => navigate('/auth/login')}>
                    Entrar
                </button>
            </div>
        </div>
    );
}
