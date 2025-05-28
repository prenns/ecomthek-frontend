'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyOTPCard({ submitAction, email }) {

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const inputsRef = useRef([]);
    const router = useRouter();

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (!value) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (index < 5 && value) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text').slice(0, 6);
        if (!/^[0-9]{6}$/.test(paste)) return;

        const newCode = paste.split('');
        setCode(newCode);
        newCode.forEach((digit, i) => {
            if (inputsRef.current[i]) {
                inputsRef.current[i].value = digit;
            }
        });
        inputsRef.current[5]?.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (code.some((c) => c === '')) return;
        setSubmitting(true);

        try {
            const fullCode = code.join('');
            const result = await submitAction(email,fullCode);

            if (result.success) {
                //TODO: set session (where?)  and redirect - given in props
                router.push(`/`);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError(error.message);
        }
        finally {
            setSubmitting(false);
        }
    };

    return (
        <form action="#" onPaste={handlePaste} onSubmit={handleSubmit}>
            <div className="flex my-4 space-x-2 sm:space-x-4 md:my-6">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                        key={i}
                        type="text"
                        maxLength={1}
                        inputMode="numeric"
                        className="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => handleChange(e, i)}
                        ref={(el) => (inputsRef.current[i] = el)}
                        required
                    />
                ))}
            </div>
            {error && (
                <p className="text-sm text-red-600 dark:text-red-400 mb-4">{error}</p>
            )}

            <div className="flex space-x-3">
                <button
                    type="submit"
                    disabled={code.some((c) => c === '') || submitting}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    {submitting ? 'Prüfe…' : 'Bestätigen'}
                </button>
            </div>
        </form>
    );
}
