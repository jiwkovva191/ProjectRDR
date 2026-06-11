import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

interface Category {
  category_id: string;
  category_name: string;
}

const AddSkillForm = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [skillName, setSkillName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const port = import.meta.env.VITE_SERVER_PORT;
  const [message, setMessage] = useState("");

  // here we EXTRACT the logged in user from the context
  const { user } = useAuth();

  const handleSubmit = async (): Promise<void> => {
    // If the user is not logged in, they cannot add skill
    // Maybe later we can consider hiding the visibility of the AddSkill button from non-logged in users.
    if(!user){
        alert("Please, log in to add skill");
        return;
    }
    try {
      console.log({
        skill_name: skillName,
        category_name: category,
        skill_description: description,
        available_dates: dates,
        user_id: user.id
      });
      const response = await fetch(`http://localhost:${port}/skills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skill_name: skillName,
          category_name: category,
          skill_description: description,
          available_dates: dates,
          user_id: user.id,
        }),
      });
      const data = await response.json();
      console.log(data);

      if(response.ok){
        setMessage("Skill successfully created!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:${port}/categories`);
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    void fetchCategories();
  }, []);

  return (
        <div className="flex justify-center  min-h-screen bg-gray-100">
            <div className="bg-white w-full max-w-2xl  p-10 rounded shadow">
                <h1 className="text-4xl text-center mb-10">

                    Add Skill

                </h1>

                <div className="mb-5">
                    <label className="block text-xl mb-3">
                        Skill Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter skill name"
                        value={skillName}
                        onChange={(e) => setSkillName(e.target.value)}
                        className="w-full border border-gray-300 p-4 text-xl rounded"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-xl mb-3">
                        Category
                    </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-300 p-4 text-xl rounded">

                        <option value="">
                            Select category
                        </option>

                        {categories.map((category) => (
                            <option
                            key={category.category_id}
                            value={category.category_name}>

                                {category.category_name}
                                </option>
                        ))}
                    </select>
                </div>

                <div className="mb-10">
                    <label className="block text-xl mb-3">
                        Description
                    </label>
                    <textarea
                        placeholder="Describe your skill..."
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)}
                        className="w-full border border-gray-300 p-4 text-xl rounded min-h-[100px] resize-none"/>
                </div>


                <div className="mb-8">
                    <label className="block text-xl mb-3">
                        Available Dates
                    </label>

                    <div className="flex gap-3">
                    <input type="date" value={selectedDate}
                           onChange={(e) => setSelectedDate(e.target.value)}
                           className="border border-gray-300 p-4 text-xl rounded"/>
                    <button type="button" onClick={() => {
                        if(selectedDate && !dates.includes(selectedDate)){
                            setDates([...dates, selectedDate]);
                            setSelectedDate("");
                        }
                    }}>
                        Add Date
                    </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3">
                    {dates.map((date) => (
                        <div key={date} className="bg-green-100 rounded-full">
                            {date}
                        </div>

                    ))}
                    </div>
                    </div>




                <button className="w-full bg-black text-white text-xl py-5 rounded hover:bg-gray-800 transition"
                    onClick={() => {
                        void handleSubmit();
                }}>
                    Add Skill
                </button>

                {message && (
                    <div className="text-green-700 text-center mt-4 font-medium">
                        {message}
                    </div>
                )}
            </div>
            </div>
  );
};

export default AddSkillForm;
