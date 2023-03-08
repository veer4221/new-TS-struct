import { BrowserRouter, Route, Outlet, Navigate, Routes } from "react-router-dom";
import "./App.css";
import AuthForms from "./pages/AuthForms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={true || localStorage.getItem("token") ? <Outlet /> : <Navigate to="/en" replace />}>
            <Route path="" element={<AuthForms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
