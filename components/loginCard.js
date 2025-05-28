'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function LoginCard({ loginSubmitAction }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.elements.email.value;
        setErrorMessage('');
        setSuccessMessage('');
        setLoading(true);

        try {
            const result = await loginSubmitAction(email);

            if (result.success) {

                localStorage.setItem('auth-email', email);
                router.push(`/login/verify`);
            } else {
                setErrorMessage(result.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Deine E-Mail Adresse
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                />
            </div>

            <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                 {loading ? 'Sende...' : 'Weiter'}
            </button>

            {successMessage && (
                <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}


            {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
        </form>

    );
}