import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import Home from "../pages/Home/Home.jsx";
import LogReg from "../pages/LogReg/LogReg.jsx";
import {ThemeProvider} from "styled-components";
import theme from "../themes/theme.js";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/form"} element={<LogReg/>}/>
                    <Route path="*" element={<h1>Not found</h1>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/about"} element={<Home/>}/>
                        <Route path={"/contacts"} element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
