import {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext.tsx"

interface Skill {
    skill_id: string;
    skill_name: string;
    category_name: string;
    skill_description: string;
}

const MySkills = () => {
const {user} = useAuth();
const [skills, setSkills] = useState<Skill[]>([]);


useEffect(() => {
    const fetchSkills = async () => {
        try {
            const port = import.meta.env.VITE_SERVER_PORT;
            const response = await fetch(`http://localhost:${port}/users/${user?.id}/skills`);
            const data = await response.json();
            setSkills(data.data);
        }
        catch(error) {
            console.log(error);
        }
    }
    if(user) {
        void fetchSkills();
    }
}, [user])


    return (
        <div className = "p-8">
            <h1 className="text-3xl font-bold mb-8">
                My Skills
            </h1>
            {skills.length === 0 ? (
                <p className="text-gray-500">
                    You have not created any skills.  </p>
            ) : (
            <div className="space-y-4">
                {skills.map((skill) => (
                    <div key={skill.skill_id} className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">
                            {skill.skill_name}
                        </h2>
                        <p className="text-gray-500">
                            {skill.category_name}
                        </p>
                        <p className="mt-2">
                            {skill.skill_description}
                        </p>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default MySkills