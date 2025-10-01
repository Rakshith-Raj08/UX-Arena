import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Tutorial from "./pages/Tutorial";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./ThemeContext";
import Login from "./pages/Login";

export default function App() {
  const isLoggedIn = false; // replace later with real auth

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/signup" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}