import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout.tsx";
import Education from "./pages/Education.tsx";
import Languages from "./pages/Languages.tsx";
import Trades from "./pages/Trades.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import AddSkill from "./pages/AddSkill.tsx";
import SkillPage from "./pages/SkillPage.tsx";
import Programming from "./pages/Programming.tsx";
import Design from "./pages/Design.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";

const App = () => {
  return (
    // wrapping everything within AuthProvider every single one of the pages keeps the memory of the logged in user
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/education"} element={<Education />} />
            <Route path={"/languages"} element={<Languages />} />
            <Route path={"/trades"} element={<Trades />} />
            <Route path={"/programming"} element={<Programming />} />
            <Route path={"/design"} element={<Design />} />
            <Route path={"/addSkill"} element={<AddSkill />} />
            <Route path={"/skills/:id"} element={<SkillPage />}></Route>
            <Route
              path={"/users/:id/profile"}
              element={<UserProfile />}
            ></Route>
          </Route>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/welcome-page"} element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
