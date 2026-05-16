import { api } from './api';

export const authService = {
    register:   (email)        => api.post('/auth/register', { email }),
    verifyCode: (email, code)  => api.post('/auth/verify',   { email, code }),
    resendCode: (email)        => api.post('/auth/resend',   { email }),
};