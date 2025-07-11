import { useEffect, useState } from "react";
import { apiRequest } from "../api";
import Sidebar from "./Sidebar";
import Suggestions from "./Suggestions";

export default function Layout({ children, token, onLogout }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [suggestedUsers, setsuggestedUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    console.log("useEffect");
    if (currentUser) fetchSuggestions();
  }, [currentUser]);

  const fetchCurrentUser = async () => {
    try {
      const user = await apiRequest("/users/profile", "GET", null, token);
      setCurrentUser(user);
    } catch (err) {
      console.log("Error");
    }
  };
  const fetchSuggestions = async () => {
    try {
      const suggestions = await apiRequest(
        "/users/suggestions",
        "GET",
        null,
        token
      );
      setsuggestedUsers(suggestions);
      console.log("suggestions" + suggestions);
    } catch (err) {
      console.log("Error");
      setsuggestedUsers([]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 hidden md:block">
        <Sidebar onLogout={onLogout} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8">{children}</main>

      {/* Suggestions */}

      <div className="w-80 flex-shrink-0 hidden lg:block pt-8 pr-8">
        <Suggestions user={currentUser} suggestions={suggestedUsers} />
      </div>
    </div>
  );
}
