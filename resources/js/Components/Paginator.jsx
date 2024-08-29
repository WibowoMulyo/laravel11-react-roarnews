import React from "react";
import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    console.log(meta);

    const prevPage = meta.current_page - 1;
    const nextPage = meta.current_page + 1;
    const currentPage = meta.current_page;

    return (
        <>
            <div className="join shadow-md">
                {meta.current_page > 1 && (
                    <Link
                        href={`?page=${prevPage}`}
                        className="join-item btn bg-white text-black border hover:bg-slate-300 transition duration-200 "
                    >
                        «
                    </Link>
                )}
                <span className="join-item btn bg-white text-black border hover:bg-slate-300 transition duration-200 ">
                    {currentPage}
                </span>
                {meta.current_page < meta.last_page && (
                    <Link
                        href={`?page=${nextPage}`}
                        className="join-item btn bg-white text-black border hover:bg-slate-300 transition duration-200 "
                    >
                        »
                    </Link>
                )}
            </div>
        </>
    );
};

export default Paginator;
