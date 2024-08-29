import React from "react";
import newsLogo from "../Assets/logoNews.png";
import DateTime from "@/Components/DateTime";
import SearchInput from "@/Components/SearchInput";
import ProfileDropdown from "./ProfileDropdown";
import { Link } from "@inertiajs/react";

const Navbar = ({ user, search, searchQuery }) => {
    return (
        <>
            <div className="navbar bg-customBlue border-b">
                <div className="max-w-7xl mx-auto flex-1">
                    <a
                        className="btn btn-ghost text-xl text-white gap-1"
                        href={route("news.index")}
                    >
                        <img
                            alt="svgImg"
                            className="w-12 h-w-12"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTI1LDNjLTEyLjEzODQzLDAgLTIyLDkuODYxNTggLTIyLDIyYzAsNy4zNTU1NCAzLjYyNTAyLDEzLjg2OTUyIDkuMTc5NjksMTcuODY1MjNjMC4yODY0MywwLjIxODI0IDAuNTg0MjUsMC40MjA5MyAwLjg5MjU4LDAuNjA5MzhjMy40Mzg1MSwyLjIyNjYyIDcuNTMxNjcsMy41MjUzOSAxMS45Mjc3MywzLjUyNTM5YzEyLjEzODQzLDAgMjIsLTkuODYxNTggMjIsLTIyYzAsLTEyLjEzODQyIC05Ljg2MTU3LC0yMiAtMjIsLTIyek0yNSw1YzExLjA1NzU1LDAgMjAsOC45NDI0NiAyMCwyMGMwLDguNDE2NDQgLTUuMTg4MTQsMTUuNTkzOCAtMTIuNTM5MDYsMTguNTQ4ODNjNS4xMTk5OCwtMy4yMTUzNCA4LjUzOTA2LC04Ljg5NjMxIDguNTM5MDYsLTE1LjM3ODkxYzAsLTEwLjAyMDk2IC04LjE0NTA1LC0xOC4xNjYwMiAtMTguMTY2MDIsLTE4LjE2NjAyYy04LjgzNjE3LDAgLTE2LjIwNTE2LDYuMzM1MzcgLTE3LjgyNjE3LDE0LjcwMzEzYzAuMTU3MTQsLTEwLjkyMTM1IDkuMDMzLC0xOS43MDcwMyAxOS45OTIxOSwtMTkuNzA3MDN6TTIyLjgzMzk4LDEyLjAwMzkxYzguOTQwMDksMCAxNi4xNjYwMiw3LjIyNTk0IDE2LjE2NjAyLDE2LjE2NjAyYzAsNi44MTc1NSAtNC4yMDgwMywxMi42MjYyNyAtMTAuMTY3OTcsMTUuMDA1ODZjMy43NDkyNCwtMi41ODMwNyA2LjIxNDg0LC02LjkwMTExIDYuMjE0ODQsLTExLjc4OTA2YzAsLTcuODkzNTYgLTYuNDIwODksLTE0LjMxNDQ1IC0xNC4zMTQ0NSwtMTQuMzE0NDVjLTYuOTQ3NTcsMCAtMTIuNzQ5LDQuOTc2NDUgLTE0LjA0MTAyLDExLjU1MDc4Yy0wLjAwNDIxLC0wLjE1MjAyIC0wLjAyMzQ0LC0wLjMwMDA3IC0wLjAyMzQ0LC0wLjQ1MzEyYzAsLTguOTQwMDggNy4yMjU5MywtMTYuMTY2MDIgMTYuMTY2MDIsLTE2LjE2NjAyek0yMC43MzI0MiwxOS4wNzIyN2M2LjgxMjY4LDAgMTIuMzE0NDUsNS41MDE3NyAxMi4zMTQ0NSwxMi4zMTQ0NWMwLDUuNDY0MTYgLTMuNTQyNzcsMTAuMDc2NjcgLTguNDU4OTgsMTEuNjkxNDFjMi42ODMzOSwtMS45MDU3OCA0LjQ0MzM2LC01LjAzMTkgNC40NDMzNiwtOC41NjQ0NWMwLC01Ljc5MDQ2IC00LjcxNTQsLTEwLjUwNTg2IC0xMC41MDU4NiwtMTAuNTA1ODZjLTQuNzkxOTMsMCAtOC44Mzk0NCwzLjIzMzQxIC0xMC4wOTU3LDcuNjI4OTFjLTAuMDAxNjgsLTAuMDgzOTUgLTAuMDExNzIsLTAuMTY1NjQgLTAuMDExNzIsLTAuMjVjMCwtNi44MTI2OCA1LjUwMTc3LC0xMi4zMTQ0NSAxMi4zMTQ0NSwtMTIuMzE0NDV6TTE4LjUyNTM5LDI2LjAwNzgxYzQuNzA5NTgsMCA4LjUwNTg2LDMuNzk2MjggOC41MDU4Niw4LjUwNTg2YzAsNC43MDk1OCAtMy43OTYyOCw4LjUwNTg2IC04LjUwNTg2LDguNTA1ODZjLTEuNDExNjMsMCAtMi43MzgzMiwtMC4zNDY2OCAtMy45MDgyLC0wLjk1MTE3Yy0wLjU5MzI0LC0wLjMzOTYxIC0xLjE1OTg0LC0wLjcxODE4IC0xLjY4NTU1LC0xLjE0ODQ0Yy0xLjc4MzE4LC0xLjU1NzM0IC0yLjkxMjExLC0zLjg0MzkxIC0yLjkxMjExLC02LjQwNjI1YzAsLTQuNzA5NTggMy43OTYyOCwtOC41MDU4NiA4LjUwNTg2LC04LjUwNTg2eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                        RoarNews
                    </a>
                </div>
                <div className="flex-none gap-2 max-w-7xl mx-auto">
                    {search && <SearchInput searchQuery={searchQuery} />}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
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
                            {user ? (
                                <>
                                    <li>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={route("profile.edit")}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log out
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link href={route("login")}>Login</Link>
                                    </li>
                                    <li>
                                        <Link href={route("register")}>
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
