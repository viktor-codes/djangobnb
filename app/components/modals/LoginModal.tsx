"use client";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>
            <form action="" className="space-y-4">
                <input
                    placeholder="Your email address"
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                <input
                    placeholder="Your password"
                    type="password"
                    className="w-full h-[54px] px-4 border  border-gray-300 rounded-xl"
                />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">Error message</div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Test")}
                />
            </form>
        </>
    );

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            content={content}
            label="Log in"
        />
    );
};

export default LoginModal;
