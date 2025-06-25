'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OAuth2RedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('access_token');

        if (accessToken) {
            // Store the access token securely (e.g., in localStorage or a cookie)
            localStorage.setItem('access_token', accessToken);

            // Redirect to the homepage or another page
            router.push('/');
        } else {
            console.error('Access token not found in URL');
        }
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Processing OAuth2 Redirect...</h1>
        </div>
    );
}
