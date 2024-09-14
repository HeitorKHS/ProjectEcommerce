import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./site/home";

export default function MinhasRotas()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}