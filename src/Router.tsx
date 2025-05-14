import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Round1_Page from "./Pages/Round1_Page";
export default function RounterCfg(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/r1" element={<Round1_Page/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}