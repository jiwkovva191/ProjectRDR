import { Link } from "react-router";

import LoginButton from "./LoginButton.tsx";

import {
    useEffect,
    useState,
    useCallback
} from "react";
import AddSkillButton from "./AddSkillButton.tsx";

interface SearchResult {

    skill_id: bigint;

    skill_name: string;

    skill_description: string;

}

const Header = () => {

    const [query, setQuery] = useState("");

    const [results, setResults] =
        useState<SearchResult[]>([]);

    const search = useCallback(async () => {

        try {

            const response = await fetch(

                `http://localhost:3001/search?query=${query}`

            );

            const data = await response.json();

            setResults(data.data);

        } catch (error) {

            console.log(error);

        }

    }, [query]);

    useEffect(() => {

        if(query.trim() === "") {

            setResults([]);

            return;

        }

        void search();

    }, [query, search]);

    return (

        <div className="w-full h-20 bg-white border-b shadow-sm flex items-center justify-between px-8">

            <div className="flex-1 max-w-2xl">

                <input
                    type="text"
                    placeholder="Search skills..."
                    value={query}
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />

                <div className="bg-white mt-2 rounded-lg shadow">

                    {results.map((result: SearchResult) => (

                        <div
                            key={result.skill_id.toString()}
                            className="p-3 border-b"
                        >

                            <h3 className="font-semibold">
                                {result.skill_name}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {result.skill_description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
<div className="flex items-center gap-3 ml-6">
            <Link to={'/addSkill'}>
                <AddSkillButton />
            </Link>

            <Link to={'/login'}>
                <LoginButton />
            </Link>
    </div>



        </div>

    )

}

export default Header;