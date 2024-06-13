import React from "react";
import ConversationDetail from "@/app/components/inbox/ConversationDetail";

const ConversationPage = () => {
    return (
        <div>
            <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
                <ConversationDetail />
            </main>
        </div>
    );
};

export default ConversationPage;
