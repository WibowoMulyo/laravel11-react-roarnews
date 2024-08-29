import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

const categories = [
    "News",
    "Tekno",
    "Otomotif",
    "Bola",
    "Makanan",
    "Bulutangkis",
    "Edukasi",
    "Kuliner",
    "Travel",
    "Sains",
    "Nasional",
    "Kesehatan",
    "Lifestyle",
    "Hiburan",
    "Selebriti",
    "Politik",
];

const Category = () => {
    const { data, setData, get } = useForm({ category: "" });
    const [selectedCategory, setSelectedCategory] = useState(data.category);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setData("category", category);
        get(route("news.index")); // Adjust the route name accordingly
    };

    useEffect(() => {
        setSelectedCategory(data.category); // Update the selected category from form data
    }, [data.category]);

    return (
        <div className="navbar-center bg-customBlue text-white font-semibold">
            <div className="navbar-center hidden lg:flex lg:justify-center items-center">
                <ul className="menu menu-horizontal px-1">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                type="button"
                                onClick={() => handleCategoryClick(category)}
                                className={`btn-link text-white no-underline px-4 py-2 rounded-md transition-colors duration-300 ${
                                    selectedCategory === category
                                        ? "bg-white text-customBlue font-bold" // Selected category styles
                                        : "hover:bg-blue-600" // Hover effect for unselected categories
                                }`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;
