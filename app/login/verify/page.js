'use client';

import VerifyOTPCard from '../../../components/verifyOTPCard'
import { verifyOTPAction } from '../../actions/authActions';

import { useEffect, useState } from 'react';

export default function VerifyOTPPage() {

    
    const [email,setEmail] = useState('');

    useEffect(() => {
        const authEmail = localStorage.getItem('auth-email');
      if (authEmail) setEmail(authEmail);
    }, []);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">


                <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white">
                    Überprüfe deinen E-Mail Posteingang
                </h1>
                <p className="font-light text-gray-500 dark:text-gray-400">
                    Wir haben einen vorläufigen Code an{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                        {email}
                    </span>
                    {" "}gesendet. Gib den Code ein, um dich anzumelden
                </p>

                <VerifyOTPCard email={email} submitAction={verifyOTPAction} />

            </div>
        </section>
    );
}