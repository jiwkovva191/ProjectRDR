import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";

const Layout = () => {
    return(
<div className="flex">
    <Navigation />

<main className="flex-1 p-8">
        <Outlet />
        </main>
</div>
    )


}

export default Layout;