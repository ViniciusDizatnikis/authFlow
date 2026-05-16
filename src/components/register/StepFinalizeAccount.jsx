import React, { useMemo, useState } from 'react';

export function StepFinalizeAccount({ animation, onContinue }) {

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const [status, setStatus] = useState({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const passwordStrength = useMemo(() => {

        const password = formData.password;

        if (!password) {
            return {
                level: 0,
            };
        }

        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength <= 1) {
            return {
                level: 1,
            };
        }

        if (strength === 2) {
            return {
                level: 2,
            };
        }

        if (strength === 3) {
            return {
                level: 3,
            };
        }

        return {
            level: 4,
        };

    }, [formData.password]);

    function handleChange(event) {

        const { id, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        setStatus(prev => ({
            ...prev,
            [id]: ''
        }));
    }

    function validateForm() {

        const newStatus = {
            userName: '',
            password: '',
            confirmPassword: ''
        };

        let valid = true;

        if (!formData.userName.trim()) {
            newStatus.userName = 'error';
            valid = false;
        }

        if (formData.password.length < 8) {
            newStatus.password = 'error';
            valid = false;
        }

        if (
            !formData.confirmPassword ||
            formData.password !== formData.confirmPassword
        ) {
            if (formData.password) {
                newStatus.confirmPassword = 'error';
            }
            valid = false;
        }

        setStatus(newStatus);

        if (valid) {

            console.log('FORM OK', formData);
            onContinue();

            /*
                API
            */
        }
    }

    return (
        <>
            <div className={`register-step ${animation}`}>

                <div className={`register-finalize-icon`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                </div>

                <h2>Finalize seu perfil</h2>

                <p>Defina nome e senha de acesso</p>

                <div className={`form-group ${status.userName}`}>
                    <label htmlFor="userName">
                        Nome completo
                    </label>

                    <input
                        type="text"
                        id='userName'
                        value={formData.userName}
                        onChange={handleChange}
                    />

                    <span className="form-group_error">
                        Digite um nome válido
                    </span>
                </div>

                <div className='register-finalize-password-row'>

                    <div className={`form-group ${status.password}`}>

                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id='password'
                            value={formData.password}
                            onChange={handleChange}

                            onCopy={(e) => e.preventDefault()}
                            onCut={(e) => e.preventDefault()}
                            onPaste={(e) => e.preventDefault()}

                            onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    e.preventDefault();
                                }
                            }}
                        />


                        <div className={`password-strength level-${passwordStrength.level}`}>

                            <div className='password-strength-steps'>

                                <div className='step' />
                                <div className='step' />
                                <div className='step' />
                                <div className='step' />

                            </div>
                        </div>

                    </div>

                    <div className={`form-group ${status.confirmPassword}`}>

                        <label htmlFor="confirmPassword">
                            Confirmar senha
                        </label>

                        <input
                            type="password"
                            id='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}

                            onCopy={(e) => e.preventDefault()}
                            onCut={(e) => e.preventDefault()}
                            onPaste={(e) => e.preventDefault()}

                            onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    e.preventDefault();
                                }
                            }}
                        />

                        <span className="form-group_error">
                            Senhas não conferem
                        </span>

                    </div>

                </div>

                <button className='register-card-btn' onClick={validateForm}>
                    Finalizar cadastro
                </button>
            </div>
        </>
    );
}