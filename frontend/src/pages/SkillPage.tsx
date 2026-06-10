import {useEffect,useState} from "react";
import {useParams} from "react-router";
import type {Availability} from "../types/Availability.ts";
import SkillInfo from "../components/SkillInfo.tsx"
import SkillAvailability from "../components/SkillAvailability.tsx";
import ReserveButton from "../components/ReserveButton.tsx";



interface Skill {
    skill_id: string;
    skill_name: string;
    category_name: string;
    skill_description: string;
}
const port = import.meta.env.VITE_SERVER_PORT;
const SkillPage = () => {
    const {id} = useParams();
    const [skill,setSkill] = useState<Skill | null>(null);
    const [dates,setDates] = useState<Availability[]>([]);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [reserveMessage, setReserveMessage] = useState("");

    useEffect(() => {
        const fetchSkill = async (): Promise<void> => {
            try {
                const response = await fetch(`http://localhost:${port}/skills/${id}`);
                const data = await response.json();
                setSkill(data.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        void fetchSkill();
    },[id])

    useEffect(() => {
        const fetchDates = async (): Promise<void> => {
            try {
                const response = await fetch(`http://localhost:${port}/skills/${id}/dates`);
                const data = await response.json();
                setDates(data.data);
            } catch (error) {
                console.log(error);

            }
        }
        void fetchDates();
    }, [id])

    const handleReserve = async (): Promise<void> => {
        if (!selectedDate) {
            return;
        }

        try {
            await fetch(`http://localhost:${port}/availability/${selectedDate}`, {method: "PATCH"});
            setReserveMessage("Date reserved!")

        } catch (error) {
            console.log(error);
        }
    }
    if (!skill) {
        return <h1> Not found</h1>
    }

    return (
        <div className="flex justify-center pt-10">
            <div className="bg-white rounded -xl shadow-md p-8 w-full max-w-4xl">
                <SkillInfo
                    skill_name={skill.skill_name}
                    category_name={skill.category_name}
                    skill_description={skill.skill_description}/>

                <SkillAvailability
                    dates={dates}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}/>

                <ReserveButton
                    selectedDate={selectedDate}
                    onReserve={() => {
                        void handleReserve();
                    }}/>
                {reserveMessage && (
                    <div className="fixed flex items-center justify-senter z-50">
                    <div className="  bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                        {reserveMessage}
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SkillPage;