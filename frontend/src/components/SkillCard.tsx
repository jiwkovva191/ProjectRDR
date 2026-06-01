import {Link} from "react-router";

interface SkillCardProps {
    skill_id: string,
    skill_name: string,
    category_name: string,
    skill_description: string;
}

const SkillCard = ({
    skill_id,
    skill_name,
    category_name,
    skill_description
}: SkillCardProps) => {
    return (
        <Link to={`/skills/${skill_id}`} className="block">

            <div className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg ">
                <h2 className="text-2xl font-bold mb-2">
                    {skill_name}
                    </h2>

                <p className="text-gray-500 mb-4">
                    {category_name}
                </p>

                <p>
                    {skill_description}
                </p>
            </div>
        </Link>
    )
}

export default SkillCard;