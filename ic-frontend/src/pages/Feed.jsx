import { useEffect, useState } from "react";
import { apiRequest } from "../api";
import Layout from "../components/Layout";

export default function Feed({ token, onLogout }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, [token]);

  const fetchPosts = async () => {
    try {
      const res = await apiRequest(
        "/posts/feed?page=0&size=50",
        "GET",
        null,
        token
      );
      setPosts(res.content);
    } catch (err) {
      //
    }
  };
  return (
    <Layout token={token} onLogout={onLogout}>
      {error && (
        <div className="w-full bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}
      {/* {posts.map} */}
      {posts.length === 0 && !error && (
        <div>
          <svg></svg>
          <h3>No Posts Yet</h3>
          <p>
            Follow some users or create your first post to see content here.{" "}
          </p>
          <button>Create Post</button>
        </div>
      )}
    </Layout>
  );
}
