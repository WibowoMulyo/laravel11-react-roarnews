import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";

const UpdateNews = () => {
    const { flash, errors, news, auth } = usePage().props;

    const [data, setData] = useState({
        title: news.title || "",
        description: news.description || "",
        category: news.category || "",
        author: news.author || "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/news/${news.id}`, data, {
            onSuccess: () => {
                // Tindakan setelah sukses, misalnya redirect atau menunjukkan pesan sukses
            },
        });
    };

    console.log(news);
    console.log(auth);

    return (
        <>
            <Head title="Edit News" />
            <header className="bg-customBlue shadow-md fixed w-full flex-col items-center justify-center top-0 left-0 right-0 z-50">
                <Navbar user={auth.user} />
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl leading-tight">
                            Edit News
                        </h2>
                    </div>
                </div>
            </header>
            <div className="py-40">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="m-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Judul
                                </label>
                                <input
                                    type="text"
                                    placeholder="Judul"
                                    className="input input-bordered w-full mt-1"
                                    value={data.title}
                                    onChange={handleChange}
                                    name="title"
                                />
                                {errors.title && (
                                    <div className="mx-2 my-1 text-customRed text-xs">
                                        <p>{errors.title}</p>
                                    </div>
                                )}
                            </div>
                            <div className="m-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Deskripsi
                                </label>
                                <input
                                    type="text"
                                    placeholder="Deskripsi"
                                    className="input input-bordered w-full mt-1"
                                    value={data.description}
                                    onChange={handleChange}
                                    name="description"
                                />
                                {errors.description && (
                                    <div className="mx-2 my-1 text-customRed text-xs">
                                        <p>{errors.description}</p>
                                    </div>
                                )}
                            </div>
                            <div className="m-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Kategori
                                </label>
                                <input
                                    type="text"
                                    placeholder="Kategori"
                                    className="input input-bordered w-full mt-1"
                                    value={data.category}
                                    onChange={handleChange}
                                    name="category"
                                />
                                {errors.category && (
                                    <div className="mx-2 my-1 text-customRed text-xs">
                                        <p>{errors.category}</p>
                                    </div>
                                )}
                            </div>
                            <PrimaryButton type={"submit"} className="m-2">
                                UPDATE
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateNews;
