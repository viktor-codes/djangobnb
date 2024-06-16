export type Property = {
    id: string,
    price_per_night: number,
}

interface ReservationSideBarProps {
    property: Property
}

const ReservationSideBar: React.FC<ReservationSideBarProps> = ({property}) => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-xxl">${property.price_per_night} per night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor=" " className="mb-2 block font-bold text-xs">
                    Guests
                </label>
                <select
                    name=""
                    id=""
                    className="cursor-pointer w-full -ml-1 text-sm"
                >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnbDark rounded-xl">
                Book
            </div>

            <div className="mb-4 flex justify-between alighn-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>
            <div className="mt-4 flex justify-between alighn-center">
                <p>DjangoBnb fee</p>
                <p>$40</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between alighn-center font-bold">
                <p>Total</p>
                <p>$840</p>
            </div>
        </aside>
    );
};

export default ReservationSideBar
