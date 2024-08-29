import React from "react";
import Category from "@/Components/Category";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/Card";
import Paginator from "@/Components/Paginator";

export default function HomePage(props) {
    return (
        <>
            <div className="h-full w-full px-5 md:px-28 bg-customWhite min-h-screen">
                {/* Header Wrapper */}
                <header className="bg-customBlue shadow-md fixed w-full flex-col items-center justify-center top-0 left-0 right-0 z-50">
                    <Navbar
                        user={props.auth.user}
                        search={true}
                        searchQuery={props.searchQuery}
                    />
                    <Category />
                </header>
                {/* Main Wrapper */}
                <main className="w-full py-40">
                    {/* Card Wrapper */}
                    {props.news.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                <Card news={props.news} />
                            </div>
                            {/* Paginator Wrapper */}
                            <div className="flex justify-center items-center mt-10">
                                <Paginator meta={props.meta} />
                            </div>
                        </>
                    ) : (
                        // Message for no news data
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center text-gray-500">
                                <h2 className="text-xl font-semibold">
                                    No news available at the moment.
                                </h2>
                                <p>Please check back later.</p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}
