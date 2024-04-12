//path: src\App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LandingPage } from "./components/pages/LandingPage";
import { GamePage } from "./components/pages/GamePage";
import { AuthProvider } from "./hooks/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="flex h-full w-full items-center justify-center bg-zinc-900">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
