import { createSupabase } from "../utils/supabase";

export async function sendOTP(email, createUser) {
    const supabase = await createSupabase();
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: createUser,
        },
    });
    if (error) throw new Error(error.message);
    return data;
}

export async function verifyOTP(email, otp) {
    const supabase = await createSupabase();
    const { data: { session }, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email',
    });
    if (error) throw new Error(error.message);
    return session;
}

export async function getAuthUser() {
    const supabase = await createSupabase();
    const user = supabase.auth.getUser();
    return user;
}

export async function logoutUser() {
    const supabase = await createSupabase();
    const { error } = await supabase.auth.signOut()
    return error;
}