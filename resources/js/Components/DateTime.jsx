import React, { useState, useEffect } from "react";

const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timerId); // Cleanup interval on component unmount
    }, []);

    const formatDateTime = (date) => {
        return date.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "Asia/Jakarta",
        });
    };

    return (
        <div className="text-white font-semibold">
            {formatDateTime(currentDateTime)}
        </div>
    );
};

export default DateTime;
