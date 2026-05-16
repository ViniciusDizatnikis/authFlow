export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isCodeComplete(code) {
    return code.every(digit => digit !== '');
}