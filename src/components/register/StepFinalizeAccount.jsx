import { useMemo, useState } from 'react';
import { LoadingButton } from '../ui/LoadingButton/LoadingButton';

const PREVENT_COPY_PASTE = {
    onCopy:  (e) => e.preventDefault(),
    onCut:   (e) => e.preventDefault(),
    onPaste: (e) => e.preventDefault(),
    onKeyDown: (e) => { if (e.key === ' ') e.preventDefault(); },
};

function getPasswordStrength(password) {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8)          score++;
    if (/[A-Z]/.test(password))        score++;
    if (/[0-9]/.test(password))        score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

export function StepFinalizeAccount({ animation, onContinue }) {
    const [formData, setFormData] = useState({ userName: '', password: '', confirmPassword: '' });
    const [errors, setErrors]     = useState({ userName: '', password: '', confirmPassword: '' });
    const [isLoading, setIsLoading] = useState(false);

    const strength = useMemo(() => getPasswordStrength(formData.password), [formData.password]);

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setErrors(prev  => ({ ...prev, [id]: '' }));
    }

    function validateForm() {
        const next = { userName: '', password: '', confirmPassword: '' };
        let valid = true;

        if (!formData.userName.trim())                                { next.userName = 'error'; valid = false; }
        if (formData.password.length < 8)                             { next.password = 'error'; valid = false; }
        if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
            if (formData.password) next.confirmPassword = 'error';
            valid = false;
        }

        setErrors(next);
        if (valid) onContinue(formData, setIsLoading);
    }

    return (
        <div className={`register-step ${animation}`}>
            <div className="register-finalize-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
            </div>

            <h2>Finalize seu perfil</h2>
            <p>Defina nome e senha de acesso</p>

            <div className={`form-group ${errors.userName}`}>
                <label htmlFor="userName">Nome completo</label>
                <input type="text" id="userName" value={formData.userName} onChange={handleChange} />
                <span className="form-group_error">Digite um nome válido</span>
            </div>

            <div className="register-finalize-password-row">
                <div className={`form-group ${errors.password}`}>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} {...PREVENT_COPY_PASTE} />
                    <div className={`password-strength level-${strength}`}>
                        <div className="password-strength-steps">
                            <div className="step" /><div className="step" /><div className="step" /><div className="step" />
                        </div>
                    </div>
                </div>

                <div className={`form-group ${errors.confirmPassword}`}>
                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} {...PREVENT_COPY_PASTE} />
                    <span className="form-group_error">Senhas não conferem</span>
                </div>
            </div>

            <LoadingButton isLoading={isLoading} onClick={validateForm}>
                Finalizar cadastro
            </LoadingButton>
        </div>
    );
}
