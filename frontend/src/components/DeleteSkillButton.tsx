interface DeleteSkillButton {
    skill_id: string;
    onDelete: (skillId: string) => void;
}

const DeleteSkillButton = ({
    skill_id,
    onDelete
}: DeleteSkillButton) => {
    return (

        <button onClick={() => onDelete(skill_id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Delete
            </button>
    )
}

export default DeleteSkillButton;