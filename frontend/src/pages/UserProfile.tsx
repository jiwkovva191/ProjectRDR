import { useNavigate, useParams } from "react-router"; //This is essential to read URL parameters
import { useEffect, useState } from "react";

interface UserProfileData {
  user_id: string;
  username: string;
  email: string;
  bio: string | null;
  location_name?: string;
  role_name?: string;
}

const UserProfile = () => {
  // useParams - this hook looks at the current URL and returns JS object with every dynamic parameter it found - e.g. /users/:id/profile - :id is dynamic
  // { id: string } - object containing key id of type string
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const port = import.meta.env.VITE_SERVER_PORT;
  console.log(port);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // Here we request data from this specific user id
        const response = await fetch(`http://localhost:${port}/users/${id}`);
        const result = await response.json();

        if (response.ok) {
          setProfile(result.user);
        } else {
          console.log("Profile not found!");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        // finally blok runs every time
        setLoading(false);
      }
    };

    // this is free ai advice, not my idea
    // if there is REAL POPULATED id in the url
    if (id) {
      // with void we tell the linter to suppress the warning of not putting await before the function that returns promise
      void fetchUserProfile();
    }
  }, [id, port]); //Re-run this effect if the URL parameters port and id change

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile not found</div>;

  const deleteUser = async () => {
    if (!window.confirm("Are you sure you want to delete your profile?")) {
      return;
    }
    const response = await fetch(`http://localhost:${port}/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Account sucessfully deleted");
      navigate("/welcome-page");
    } else {
      alert("Failed to delete user");
    }
  };
  return (
    <div className="flex flex-col gap-3 border border-blue-900 border-3 p-10 rounded-4xl ">
      <div className="flex gap-2 text-4xl">
        <p className="text-green-800 font-bold">Username:</p>
        <p>{profile.username}</p>
      </div>

      <div className="flex gap-2 text-2xl">
        <p className="text-green-800 font-bold">Email:</p>
        <p>{profile.email}</p>
      </div>

      <div className="flex gap-2 text-2xl">
        <p className="text-green-800 font-bold">Bio:</p>
        <p>{profile.bio || "No bio yet"}</p>
      </div>

      <div className="flex gap-2 text-2xl">
        <p className="text-green-800 font-bold">Location:</p>
        <p>{profile.location_name || "Not specified"}</p>
      </div>

      <div className="flex gap-2 text-2xl">
        <p className="text-green-800 font-bold">Role:</p>
        <p>{profile.role_name || "User"}</p>
      </div>
      <button className="text-2xl border rounded-sm w-1/2  bg-amber-700 text-white p-2 font-bold" onClick={deleteUser}>Delete</button>
    </div>
  );
};

export default UserProfile;
