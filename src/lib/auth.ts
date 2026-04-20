import { createAuthClient } from '@neondatabase/neon-js/auth';
export const authClient = createAuthClient(
    import.meta.env.VITE_NEON_AUTH_URL,
    {
        redirectURI: import.meta.env.PROD 
            ? 'https://gym-ai-frontend.onrender.com' 
            : 'http://localhost:5173'
    }
)