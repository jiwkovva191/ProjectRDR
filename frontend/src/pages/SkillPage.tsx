import {useEffect, useState} from "react";
import {useParams} from "react-router";

interface Skill{
    skill_id: string;
    skill_name: string;
    category_name: string;
    skill_description: string;
}

const SkillPage = () => {
    const {id} = useParams();

const [skill, setSkill] = useState<Skill |null>(null);

useEffect(() => {
    const fetchSkill = async (): Promise<void> => {
        try{
            const response = await fetch(`http://localhost:3001/skills/${id}`);

            const data = await response.json();

            setSkill(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    void fetchSkill();
},[id]);

if(!skill) {
    return <h1> Not found </h1>
}

return (
    <div className="flex justify-center pt-10">
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">{skill.skill_name}</h1>
        <p className="text-gray-500 mb-8">{skill.category_name}</p>

            <div>
            <h2 className="text-x1 font-semibold mb-4">Description</h2>
                <p className="text-lg leading-relaxed">{skill.skill_description}</p>
            </div>

            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg ">Start Chat</button>

        </div>
    </div>
)
}

export default SkillPage;