import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Signin from "./pages/sign-in/sign-in.page.jsx";
import Signup from "./pages/sign-up/sign-up.page.jsx";
import Home from "./pages/home/home.page.jsx";
import MemberDashboard from "./pages/dashboard/member-dashboard/member-dashboard.page.jsx";
import AdminDashboard from "./pages/dashboard/admin-dashboard/admin-dashboard.page.jsx";
import Allbooks from "./pages/all-books/all-books.page.jsx";
import Header from "./components/header//header.component.jsx";
import { AuthContext } from "./context/auth-context.jsx";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              user ? (
                user.isAdmin ? (
                  <Navigate to="/dashboard@admin" />
                ) : (
                  <Navigate to="/dashboard@member" />
                )
              ) : (
                <Signin />
              )
            }
          />
          {!user && <Route path="/signup" element={<Signup />} />}
          <Route
            path="/dashboard@member"
            element={
              user ? (
                user.isAdmin === false ? (
                  <MemberDashboard />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/dashboard@admin"
            element={
              user ? (
                user.isAdmin === true ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/books" element={<Allbooks />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
