import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Ragister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}

export default App;
