import {Home} from "./routes/Home.tsx";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Shared/Header.tsx";
import {PageNotFound} from "./components/Shared/PageNotFound.tsx";
import {DashBoard} from "./routes/DashBorad.tsx";
import {HomeMainLayer} from "./components/Home/HomeMainLayer.tsx";

const App = () => {
    return (
        <main className="min-h-screen relative">
            <HomeMainLayer/>
            <Header/>
            <div className="mt-[70px]">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/dashboard"} element={<DashBoard/>}/>
                    <Route path={"*"} element={<PageNotFound/>}/>
                </Routes>
            </div>
        </main>
    )
}

export default App