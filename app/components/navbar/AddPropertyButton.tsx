"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
    const LoginModal = useLoginModal();
    const AddPropertyModal = useAddPropertyModal();

    const djangobnbYourHome = () => {
        if (userId) {
            AddPropertyModal.open();
        } else {
            LoginModal.open();
        }
    };

    return (
        <div
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
            onClick={djangobnbYourHome}
        >
            DjangoBnB your
        </div>
    );
};

export default AddPropertyButton;
