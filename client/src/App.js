import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Form from "./Form";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#F9FAFB] h-[100vh]">
      <div className="border-b-2 border-gray-200 z-50 w-full absolute">
        <nav className="-mb-0.5 flex justify-center space-x-6 gap-5">
          <Link
            to="/form/A"
            className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 ${
              isActive("/form/A")
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            } text-xl font-medium whitespace-nowrap focus:outline-none focus:text-blue-800`}
          >
            Form A
          </Link>
          <Link
            to="/form/B"
            className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 ${
              isActive("/form/B")
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            } text-xl font-medium whitespace-nowrap focus:outline-none focus:text-blue-800`}
          >
            Form B
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/form/:formType" element={<Form />} />
      </Routes>
      <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
        {!isActive("/form/A") && !isActive("/form/B") && (
          <h1 className="text-2xl font-semibold text-blue-600">
            Select Your Form to Continue
          </h1>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;
