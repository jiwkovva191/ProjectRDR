import {useEffect, useState} from "react";
import SkillCard from "../components/SkillCard.tsx";

interface Skill {
    skill_id: string;
    skill_name: string;
    category_name: string;
    skill_description: string;

}
const port = import.meta.env.VITE_SERVER_PORT;
const Trades = () => {
    const[skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        const fetchSkills = async (): Promise<void> => {
            try{
                const response = await fetch(`http://localhost:${port}/skills/category/Trades`);

                const data = await response.json();

                setSkills(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        void fetchSkills();

    }, []);

    return (
        <div className="p-1">
            {skills.map((skill) => (
                <SkillCard
                    key={skill.skill_id}
                    skill_id={skill.skill_id}
                    skill_name={skill.skill_name}
                    category_name={skill.category_name}
                    skill_description={skill.skill_description}

                />
            ))}

        </div>
    )
}

export default Trades;