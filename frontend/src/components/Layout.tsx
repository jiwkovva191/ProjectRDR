import Navigation from "./Navigation.tsx";

import { Outlet } from "react-router";

import Header from "./Header.tsx";

export const Layout = () => {

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="fixed top-0 left-0 h-screen w-36 z-40">

                <Navigation />

            </div>

            <div className="ml-36">

                <Header />

                {/* PAGE CONTENT */}

                <main className="p-8 mt-20">

                    <Outlet />

                </main>

            </div>

        </div>

    )

}
