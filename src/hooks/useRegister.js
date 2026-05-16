import { useState } from 'react';
import { authService } from '../services/authService';

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState('');

    async function submitEmail(email) {
        setLoading(true);
        setError('');
        try {
            await authService.register(email);
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    }

    async function submitCode(email, code) {}

    return { loading, error, submitEmail, submitCode };
}