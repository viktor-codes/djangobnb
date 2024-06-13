"use client";
import CustomButton from "@/app/components/forms/CustomButton";
const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flexflex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In labore mollitia at et, architecto soluta dolor
                        deleniti iure ea suscipit ex fuga cupiditate,
                        consequuntur voluptatem laborum facere illum, omnis est!
                    </p>
                </div>
                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">Viktor Rura</p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In labore mollitia at et, architecto soluta dolor
                        deleniti iure ea suscipit ex fuga cupiditate,
                        consequuntur voluptatem laborum facere illum, omnis est!
                    </p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton
                    label="Send"
                    onClick={() => {
                        console.log("Clicked");
                    }}
                    className="w-[100px]"
                />
            </div>
        </>
    );
};

export default ConversationDetail;
