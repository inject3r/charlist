import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CategoryRouteHandler from "./components/CategoryRouteHandler";
import Toast from "./components/UI/Toast";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Routes>
          <Route path="/" element={<CategoryRouteHandler />} />
          <Route path="/:categoryId" element={<CategoryRouteHandler />} />
        </Routes>
        <Toast />
      </div>
    </Router>
  );
};

export default App;
