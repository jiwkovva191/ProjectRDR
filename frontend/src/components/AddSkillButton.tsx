import {useNavigate} from "react-router-dom";

const AddSkillButton = () => {

    const navigate = useNavigate();
    return (

        <button onClick={() => navigate("/addSkill")}
                className="bg-[#0F2D52] text-white px-6 py-3 rounded-lg hover:opacity-70 transition">Add Skill</button>
    )
}
export default AddSkillButton;