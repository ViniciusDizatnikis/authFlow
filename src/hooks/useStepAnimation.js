import { useState } from 'react';

const ANIMATION_TIME = 350;

export function useStepAnimation() {

    const [step, setStep] = useState(0);
    const [animation, setAnimation] = useState('');

    function clearAnimation() {

        setTimeout(() => {
            setAnimation('');
        }, ANIMATION_TIME);

    }

    function nextStep() {

        setAnimation('fade-out-left');

        setTimeout(() => {

            setStep(prev => prev + 1);

            setAnimation('fade-in-right');

            clearAnimation();

        }, ANIMATION_TIME);

    }

    function prevStep() {

        setAnimation('fade-out-right');

        setTimeout(() => {

            setStep(prev => prev - 1);

            setAnimation('fade-in-left');

            clearAnimation();

        }, ANIMATION_TIME);

    }

    return {
        step,
        animation,
        nextStep,
        prevStep
    };
}