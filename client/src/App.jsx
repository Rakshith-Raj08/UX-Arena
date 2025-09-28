import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Tutorial from "./pages/Tutorial";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
