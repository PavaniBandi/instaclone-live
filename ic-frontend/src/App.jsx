import { useState } from "react";
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

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
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
          element={token ? <Feed token={token} /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={
            token ? <CreatePost token={token} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/profile/:userId"
          element={token ? <Profile token={token} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
