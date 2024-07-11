// src/App.tsx

import { Navbar } from "./components/navbar";
import { NotFound } from "./pages/404";
import { Gallery } from "./pages/gallery";
import { ITProjects } from "./pages/itProjects";
import { Landing } from "./pages/landing";

const App = () => {
    const Route = () => {
        console.log(window.location.pathname);
        if (window.location.pathname === "/") {
            return <Landing />;
        } else if (window.location.pathname === "/projectdetails") {
            return <ITProjects />;
        } else if (window.location.pathname === "/gallery") {
            return <Gallery />;
        } else {
            return <NotFound />;
        }
    };

    return <div className='h-screen overflow-hidden'>{Route()}</div>;
};
export default App;
