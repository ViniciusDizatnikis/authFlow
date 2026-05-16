const BASE_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || 'Erro inesperado');
    }

    return res.json();
}

export const api = {
    post: (path, body) => request(path, {
        method: 'POST',
        body: JSON.stringify(body),
    }),
};