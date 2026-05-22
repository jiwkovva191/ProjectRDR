import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout.tsx";
import Education from "./pages/Education.tsx";
import Languages from "./pages/Languages.tsx";
import Trades from "./pages/Trades.tsx";
import LoginForm from "./pages/LoginForm.tsx";
import SignUp from "./pages/SignUp.tsx";
import AddSkill from "./pages/AddSkill.tsx";


const App = () => {
    return (

<BrowserRouter>

    <Routes>
        <Route element={<Layout />} >


            <Route path={'/'} element={<Home />}/>
            <Route path={'/education'} element={<Education />}/>
            <Route path={'/languages'} element={<Languages />}/>
            <Route path={'/trades'} element={<Trades />}/>
            <Route path={'/addSkill'} element={<AddSkill />}/>

        </Route>
        <Route path={'/login'} element={<LoginForm />}/>
        <Route path={'/signup'} element={<SignUp />}/>


    </Routes>
</BrowserRouter>


    )
}

export default App;