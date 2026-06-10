import type {Availability} from "../types/Availability";
import type {Dispatch, SetStateAction} from "react";

interface SkillAvailability {
    dates: Availability[];
    selectedDate: number | null;
    setSelectedDate: Dispatch<SetStateAction<number |null>>;
}

const SkillAvailability = ({
    dates,
    selectedDate,
    setSelectedDate
}: SkillAvailability) => {

    return (
        <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">
                Available Dates
            </h2>

            <div className="flex flex-wrap gap-2">
                {dates.map((date) => (

                    <button key={date.availability_id} onClick={() => setSelectedDate(date.availability_id)}
                         className={`bg-green-100 text-green-800 px-3 py-2 rounded-lg ${selectedDate === date.availability_id ? "bg-green-800 text-white" : "bg-green-100 text-green-800"}`}>

                        {new Date(date.available_date).toLocaleDateString(
                            "en-GB",
                            {day: "numeric", month: "long"}
                        )}
                    </button>
                ))}

            </div>
        </div>
    );
}

export default SkillAvailability;