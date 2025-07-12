import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Feed from "./pages/Feed.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Profile from "./pages/Profile.jsx";
import PostDetail from "./pages/PostDetail.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login setToken={setToken} />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <Signup setToken={setToken} />}
        />
        <Route
          path="/"
          element={
            token ? (
              <Feed token={token} onLogout={handlelogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/create"
          element={
            token ? (
              <CreatePost token={token} onLogout={handlelogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile/:userId"
          element={
            token ? (
              <Profile token={token} onLogout={handlelogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/post/:postId"
          element={
            token ? (
              <PostDetail token={token} onLogout={handlelogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
