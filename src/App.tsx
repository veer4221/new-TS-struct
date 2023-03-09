import { BrowserRouter, Route, Outlet, Navigate, Routes } from "react-router-dom";
import "./App.css";
import AuthForms from "./pages/AuthForms";
import AuthOutlate from "./pages/AuthOutlate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/en" element={<AuthOutlate />}>
            <Route
              path=""
              element={
                <div>
                  <h1>hello</h1>
                </div>
              }
            />
          </Route>

          <Route path="/" element={true || localStorage.getItem("token") ? <Outlet /> : <Navigate to="/en" replace />}>
            <Route path="" element={<AuthForms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
