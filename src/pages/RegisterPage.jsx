import { useState } from 'react';
import { useStepAnimation } from '../hooks/useStepAnimation';
import { StepEmail } from '../components/register/StepEmail';
import { StepVerifyCode } from '../components/register/StepVerifyCode';
import { StepFinalizeAccount } from '../components/register/StepFinalizeAccount';
import { StepCompleted } from '../components/register/StepCompleted';

const TOTAL_STEPS = 4;

const RegisterPage = () => {
    const { step, animation, nextStep, prevStep } = useStepAnimation();
    const [email, setEmail]       = useState('');
    const [userName, setUserName] = useState('');

    function handleEmailContinue(validEmail, setIsLoading) {
        setEmail(validEmail);
        nextStep();
    }

    function handleVerifyCode(code, setIsLoading) {
        console.log('Código verificado:', code);
        
        nextStep();
    }

    function handleFinalizeAccount(formData, setIsLoading) {
        setUserName(formData.userName);
        // Exemplo: setIsLoading(true) → chamada API → setIsLoading(false) → nextStep()
        nextStep();
    }

    return (
        <div className="register-container container-background">
            <div className="register-card">
                <div className="register-card-progress">
                    {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                        <div
                            key={i}
                            className={`pg ${step === i ? 'active' : ''} ${step > i ? 'done' : ''}`}
                        />
                    ))}
                </div>

                {step === 0 && (
                    <StepEmail animation={animation} onContinue={handleEmailContinue} />
                )}
                {step === 1 && (
                    <StepVerifyCode animation={animation} email={email} onVerify={handleVerifyCode} onBack={prevStep} />
                )}
                {step === 2 && (
                    <StepFinalizeAccount animation={animation} onContinue={handleFinalizeAccount} />
                )}
                {step === 3 && (
                    <StepCompleted animation={animation} userName={userName} email={email} />
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
