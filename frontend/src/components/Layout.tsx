import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";
import Header from "./Header.tsx";

const Layout = () => {
    return(
<div className="flex">
    <Navigation />

    <Header/>

<main className="flex-1 p-8">
        <Outlet />
        </main>
</div>
    )


}

export default Layout;