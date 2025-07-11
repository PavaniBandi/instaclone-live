import { Link } from "react-router-dom";

export default function Suggestions({ user, suggestions = [] }) {
  return (
    <aside className="hidden lg:block w-1/4 min-w-[280px] pt-8 pr-4">
      <div className="flex items-center mb-6">
        <img
          src={
            user?.profilePicture || "https://i.pravatar.cc/150?u=" + user?.id
          }
          alt=""
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <div className="font-semibold text-sm">
            {user?.username || "User"}
          </div>
          <div className="text-gray-400 text-xs">Switch</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm font-semibold">
          Suggested For You
        </span>
        <span className="text-xs font-semibold cursor-pointer">See All</span>
      </div>
      <div className="mb-6">
        {suggestions.length === 0 && (
          <div className="text-xs text-gray-400">No Suggestions</div>
        )}
        {suggestions.map((s) => (
          <div key={s.id} className="flex items-center mb-3">
            <Link
              to={"/profile/${s.id}"}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={s.profilePicture || `https://i.pravatar.cc/150?u=${s.id}`}
                alt=""
                className="w-8 h-8 rounded-full mr-3"
              />
              <span className="text-sm font-semibold text-gray-900 hover:text-gray-700">
                {s.username}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-400 mt-8">2025 Instagram Clone</div>
    </aside>
  );
}
