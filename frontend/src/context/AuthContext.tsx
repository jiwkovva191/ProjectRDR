import { createContext, useState, useEffect, useContext } from "react";

// here we define the user-entity data
interface AuthUser{
    id: number,
    username: string,
    email: string
}

//anything passed to the AuthContext should include: user, login function, logout function, loading from these exact types.
// any package that either doesnt have all the items or the item is of the wrong type is not valid for the function.
interface AuthContextType {
    // {property name} : {property type}  
    user: AuthUser | null;
    // {property name} : {input parameters} => {return type}
    login: (userData: AuthUser) => void;
    logout: () => void;
    loading: boolean;
}

// createContext(...) - thats why enables browser to store shared value (e.g. user_id)
// (undefined) => the default value passed to the AuthContext
const AuthContext = createContext<AuthContextType | undefined> (undefined);

// children - special keyword - it means "whatever you put inside this component"
// It tells react that this is "wrapper component" and it doesnt know what components will be put inside it yet.
// {children}: {children: React.ReactNode} - the children can be anything React is capable of rendering - TS will allow all types inside the component
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    // useState hook - when we dynamically change a useState variable, it forces React to rerender the screen with the fresh data.
    // user - the actual variable
    // setUser - the trigger to change its value
    // <AuthUser | null> - the allowed types
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    // useEffect hook - lets you perform side effects inside functions
    // [] - dependency array (when to execute the code - trigger)
    // [] - run this effect function once when the component renders on the screen for the first time
    // e.g. [user] - the effect function will run only when this exact specific variable changes
    // e.g. the dependency array is omitted - the effect function will run on EVERY screen update
    // it searches for key named "user" in the localstorage
    // JSON.parse -  reconstructs the json into structured object to successfully set the value for the user variable
    useEffect (() => {
        const savedUser = localStorage.getItem("user");
        if(savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);  
    }, []);

    const login = (userData: AuthUser) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("user");
    };

    return(
        // outer {} - we are writing js inside html
        // takes user, login, logout, loading, bundles them into single package, broadcast them out to the browser dom env. Any child can get this object.
        <AuthContext.Provider value={{ user, login, logout, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// Gemini suggested it - i cannot fully understand its logic but here's the explanation:
// It exposes your global state. Now, inside any component file in your app, fetching your user data or triggering a login is simplified to a single line of code:
// const { user, login, logout } = useAuth();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}