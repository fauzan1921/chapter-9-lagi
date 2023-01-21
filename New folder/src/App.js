import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import FlappyBirdPage from "./pages/flappy bird";
import { AuthProvider, useAuth } from "./components/Context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<>Hallo</>} /> */}
          {/* <Route index path="/" element={<Home />} /> */}
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="flappyBird" element={<FlappyBirdPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
