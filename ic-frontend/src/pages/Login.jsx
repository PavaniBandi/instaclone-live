import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl flex bg-white rounded-lg overflow-hidden">
          <div className="hidden md:block w-1/2 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=500&q=80"
              alt="Insta"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold font-sans mb-8">
                Instagram
              </span>
              <form onSubmit={handleSubmit} className="w-full flex flex-col">
                {error && (
                  <div className="text-red-500 mb-2 text-center">{error}</div>
                )}
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full mb-2 px-3 py-2 border rounded bg-gray-50 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full mb-2 px-3 py-2 border rounded bg-gray-50 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded font-semibold mt-2 mb-3 hover:bg-blue-600"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
