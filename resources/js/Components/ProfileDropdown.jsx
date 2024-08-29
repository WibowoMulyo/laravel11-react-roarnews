import React from "react";
import { Link } from "@inertiajs/react";

const ProfileDropdown = ({ user }) => {
    return (
        <>
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                >
                    <div className="w-20 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    {/* Jika tidak login = settings profile logout, maka kalo lagin = login register */}
                    {!user ? (
                        <>
                            <li>
                                <Link href={route("login")} as="button">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href={route("register")} as="button">
                                    Register
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href={route("dashboard")} as="button">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={route("register")} as="button">
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </>
    );
};

export default ProfileDropdown;
