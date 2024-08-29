import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AlertSuccess from "@/Components/AlertSuccess";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth }) {
    const { flash, errors, news } = usePage().props;

    const { data, setData, reset } = useForm({
        title: "",
        description: "",
        category: "",
        author: "{auth.user.name}",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/news", data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    useEffect(() => {
        // Fetch news only once when the component mounts
        if (!news) {
            Inertia.get("/news");
        }
    }, []);

    console.log(auth);

    return (
        <>
            <Head title="Dashboard" />
            <header className="bg-customBlue shadow-md fixed w-full flex-col items-center justify-center top-0 left-0 right-0 z-50">
                <Navbar user={auth.user} search={false} />
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl leading-tight">
                            Dashboard
                        </h2>
                    </div>
                </div>
            </header>

            <div className="py-40">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-md sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flash.message && (
                                <div className="mb-4">
                                    <AlertSuccess message={flash.message} />
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="m-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Judul
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Judul"
                                        className="input input-bordered w-full mt-1"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
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
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                    />
                                    {errors.category && (
                                        <div className="mx-2 my-1 text-customRed text-xs">
                                            <p>{errors.category}</p>
                                        </div>
                                    )}
                                </div>
                                <PrimaryButton type={"submit"} className="m-2">
                                    SUBMIT
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-4 sm:px-6 lg:px-8">
                    {news && news.length > 0 ? (
                        news.map((data, index) => {
                            return (
                                <div
                                    className="card w-full bg-white shadow-md text-black mt-2"
                                    key={index}
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {data.title}
                                            <div className="badge badge-primary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>{data.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-secondary">
                                                {data.category}
                                            </div>
                                            <div className="badge badge-neutral">
                                                {data.author}
                                            </div>
                                            <div className="badge bg-customBgIcon">
                                                <Link
                                                    href={route(
                                                        "news.edit",
                                                        data.id
                                                    )}
                                                    method="get"
                                                >
                                                    <TbEdit color="white" />
                                                </Link>
                                            </div>
                                            <div className="badge bg-customRed">
                                                <Link
                                                    href={route(
                                                        "news.destroy",
                                                        data.id
                                                    )}
                                                    method="delete"
                                                >
                                                    <MdDelete color="white" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center mt-4 py-6 w-full bg-white rounded-lg shadow-sm text-black ">
                            No news available
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
