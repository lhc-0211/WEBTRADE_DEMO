import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Header /> {/* Header global */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
