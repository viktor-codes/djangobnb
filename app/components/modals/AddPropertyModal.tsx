"use client";

import Image from "next/image";

import Modal from "./Modal";
import { useState } from "react";
import LoginModal from "./LoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";

const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const addPropertyModal = useAddPropertyModal();

    const content = (
        <>
            {currentStep === 1 ? (
                <>
                <h2 className="mb-6 text-2xl"> Choose Category</h2>
                <CustomButton label="next" onClick={() => setCurrentStep(2)} />
                </>
            ) : (
                <p>step 2</p>
            )
        }
            
            
        </>
    )

    return (
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen} 
                close={addPropertyModal.close}
                label="Add a new property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal;