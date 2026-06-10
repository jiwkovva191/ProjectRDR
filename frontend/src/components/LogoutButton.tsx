import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();      
    navigate("/welcome-page"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-[#0F2D52] text-white px-6 py-3 rounded-lg hover:opacity-70 transition"
    >
      Logout
    </button>
  );
};
export default LogoutButton;
