import { useState } from 'react';

const ANIMATION_TIME = 400;

export function useStepAnimation() {
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

    return { step, animation, nextStep, prevStep };
}