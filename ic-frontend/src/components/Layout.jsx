import Sidebar from "./Sidebar";
import Suggestions from "./Suggestions";

export default function Layout({ children, token }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8">{children}</main>

      {/* Suggestions */}

      <div className="w-80 flex-shrink-0 hidden lg:block pt-8 pr-8">
        <Suggestions />
      </div>
    </div>
  );
}
