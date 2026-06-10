interface SkillInfoProps {
    skill_name: string;
    category_name: string;
    skill_description: string;
}

const SkillInfo = ({
    skill_name,
    category_name,
    skill_description
}: SkillInfoProps) => {

    return (
        <>
        <h1 className="text-4xl font-bold mb-2">
            {skill_name}
        </h1>

        <p className="text-gray-500 mb-8">
            {category_name}
        </p>

        <div>
            <h2 className="text-x1 font-semibold mb-4">
                Description
            </h2>
            <p className="text-lg leading-relaxed">
                {skill_description}
            </p>
        </div>
        </>
    )
}

export default SkillInfo;