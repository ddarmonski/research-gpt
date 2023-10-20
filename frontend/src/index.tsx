{/*import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";

initializeIcons();

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Chat />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);*/}

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Label, initializeIcons } from "@fluentui/react";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";
import PopupModal from "./PopupModal"; // Import the new PopupModal component
import { useCookies } from "react-cookie";

initializeIcons();

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(true); // Initially set to true to show the popup on load
    const [cookies] = useCookies(["termsConsent"]);
    return (
        <>
            {!cookies.termsConsent&&<PopupModal
                isOpen={isModalOpen}
                onDismiss={() => setIsModalOpen(false)}
                // title="Welcome to Phoenix GPT!"
                title=""
                subText={ 
                    
                        'By clicking OK you agree to the following Terms and Conditions: '
                          
            }
            /> }
                     
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Chat />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);