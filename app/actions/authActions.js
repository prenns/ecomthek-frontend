"use server"

import { sendOTP, verifyOTP, logoutUser } from "../../lib/api/auth"

export const sendOTPAction = async (email) => {

    try {
        await sendOTP(email, true);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const verifyOTPAction = async (email, otp) => {

    try {
        const session = await verifyOTP(email, otp);
        return { success: true, session: session };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const logoutUserAction = async () => {
    return await logoutUser();
}