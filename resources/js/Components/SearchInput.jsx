import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const SearchInput = () => {
    const { data, setData, get } = useForm({ search: "" });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route("news.index"), { preserveState: true }); // Adjust the route name accordingly
    };

    return (
        <form onSubmit={handleSearch} className="join">
            <div>
                <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                    value={data.search}
                    onChange={(e) => setData("search", e.target.value)}
                />
            </div>
            <div className="indicator">
                <button type="submit" className="btn join-item">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchInput;
