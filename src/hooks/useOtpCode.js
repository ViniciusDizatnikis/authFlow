import { useRef, useState } from 'react';
import { isCodeComplete } from '../utils/validations';

const CODE_LENGTH = 6;

export function useOtpCode() {
    const [code, setCode] = useState(Array(CODE_LENGTH).fill(''));
    const inputsRef = useRef([]);

    function handleCodeChange(value, index) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < CODE_LENGTH - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    }

    function handleKeyDown(e, index) {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    }

    function handlePaste(e) {
        const paste = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, CODE_LENGTH);

        if (!paste) return;

        const newCode = paste.split('');
        while (newCode.length < CODE_LENGTH) newCode.push('');

        setCode(newCode);
        inputsRef.current[Math.min(paste.length, CODE_LENGTH - 1)]?.focus();
        e.preventDefault();
    }

    function getCodeValue() {
        return code.join('');
    }

    return {
        code,
        inputsRef,
        codeLength: CODE_LENGTH,
        isComplete: isCodeComplete(code),
        getCodeValue,
        handleCodeChange,
        handleKeyDown,
        handlePaste,
    };
}