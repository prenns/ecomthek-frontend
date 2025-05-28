'use client'
export default function UserInfoHeader({ logoutSubmitAction, user }) {

    const handleLogout = async (event) => {
        event.preventDefault();
        const error = await logoutSubmitAction();
        if(error) {
            console.log(error);
        }
    }

    return (
        <>
        <span className="text-sm text-gray-700 dark:text-white hidden sm:inline">
            {user.email}
        </span>
        <form onSubmit={handleLogout} method="post">
            <button className="text-sm text-red-600 dark:text-red-400">Logout</button>
        </form>

    </>
    )
}
    