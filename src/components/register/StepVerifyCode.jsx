import { useOtpCode } from '../../hooks/useOtpCode';

export function StepVerifyCode({ animation, email, onVerify, onBack }) {
    const {
        code,
        inputsRef,
        codeLength,
        isComplete,
        getCodeValue,
        handleCodeChange,
        handleKeyDown,
        handlePaste,
    } = useOtpCode();

    function handleVerify() {
        if (!isComplete) {
            return;
        }
        onVerify(getCodeValue());
    }

    return (
        <div className={`register-step ${animation}`}>
            <h2>Confirme seu e-mail</h2>

            <div className="register-card-sub">
                <p>
                    Enviamos um e-mail para
                    <br />
                    <b className="email-highlight">{email}</b>
                </p>
            </div>

            <div className="register-card-code-row">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleCodeChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                    />
                ))}
            </div>

            <div className="register-card-resend">
                Não recebeu?{' '}
                <button className="link-btn">Reenviar Código</button>
            </div>

            <button className="register-card-btn" onClick={handleVerify}>
                Verificar
            </button>

            <button className="link-btn register-card-not-email" onClick={onBack}>
                Não é este email
            </button>
        </div>
    );
}