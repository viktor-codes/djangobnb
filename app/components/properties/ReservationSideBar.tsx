"use client";

import {useState, useEffect} from "react";
import { Range } from "react-date-range";

import { differenceInDays, eachDayOfInterval } from "date-fns";

import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";
import DatePicker from "../forms/Calendar";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
}

export type Property = {
    id: string,
    price_per_night: number,
    guests: number,
}

interface ReservationSideBarProps {
    userId: string | null,
    property: Property
}

const ReservationSideBar: React.FC<ReservationSideBarProps> = ({property, userId}) => {
    
    const loginModal = useLoginModal();
    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [guests, setGuests] = useState<string>("1");
    const guestsRange = Array.from({length: property.guests}, (_, i) => (i + 1));

    const _setDateRange =(selection: any) => {
        const newStartDate = new Date(selection.startDate);
        const newEndDate = new Date(selection.endDate);

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1);
        }

        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate,
        })
    }


    useEffect(() =>{
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
            if (dayCount && property.price_per_night) {
                const _fee = ((dayCount * property.price_per_night) / 100) * 5; 
                setFee(_fee);
                setTotalPrice((dayCount * property.price_per_night) + _fee);
                setNights(dayCount);
            } else {
                const _fee = (property.price_per_night / 100) * 5;

                setFee(_fee);
                setTotalPrice(property.price_per_night + _fee);
                setNights(1);
            }
        }
    }, [dateRange])

    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-xxl">
                ${property.price_per_night} per night
            </h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
                bookedDates={[]}
            />

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor=" " className="mb-2 block font-bold text-xs">
                    Guests
                </label>
                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="cursor-pointer w-full -ml-1 text-sm"
                >
                    {guestsRange.map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>

            <div className="cursor-pointer w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Book
            </div>

            <div className="mb-4 flex justify-between alighn-center">
                <p>
                    {property.price_per_night} * {nights} nights
                </p>
                <p>
                    ${property.price_per_night * nights}
                </p>
            </div>
            <div className="mt-4 flex justify-between alighn-center">
                <p>DjangoBnb fee</p>
                <p>${fee}</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between alighn-center font-bold">
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
        </aside>
    );
};

export default ReservationSideBar
