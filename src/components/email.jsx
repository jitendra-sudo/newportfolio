import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { IoMdMailUnread } from "react-icons/io";
import { data } from "./data";

function Email() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const message = `Hey there! You’ve got a new message from your portfolio.
            Email: ${email}
           Take a moment to reply when you can 😊`;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        const templateParams = {
            email,
            name: data?.PortfolioName,
            title: data?.Portfoliotitle,
            message: message,
        };

        emailjs
            .send(data?.serviceID, data?.templateID, templateParams, data?.userID)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                setSuccess("Email sent successfully!");
                setEmail("");
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                setError("Failed to send email. Please try again later.");
            });
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess("");
            setError("");
        }, 5000);
        return () => clearTimeout(timer);
    }, [success, error]);

    return (
        <div className="flex flex-col items-center justify-center py-10 bg-white">
            <div className="text-xl md:text-4xl font-bold text-center text-gray-800">
                <p>Have an Awesome Project</p>
                <p>
                    Idea?
                    <span className="text-orange-500"> Let’s Discuss</span>
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-6 flex p-1 w-full max-w-lg border border-black/10 rounded-full overflow-hidden items-center"
            >
                <div className="py-1 px-2 md:py-3 md:px-4 bg-orange-500/30 rounded-full text-orange-500">
                    <IoMdMailUnread size={24} />
                </div>

                <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-1 py-1 md:px-4 md:py-2 text-xs md:text-sm outline-none text-gray-700"
                    required
                />

                <button
                    type="submit"
                    className="bg-orange-500 rounded-full text-white px-3 py-1 md:px-6 md:py-3 font-semibold hover:bg-orange-600 transition-colors"
                >
                    Send
                </button>
            </form>

            {success && <p className="mt-4 text-green-500">{success}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
    );
}

export default Email;
