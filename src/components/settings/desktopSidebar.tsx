import { menuIcons } from "../../utilities/menuIcons"

export const DesktopSidebar =() => {
    return(
        <>
              <aside className="w-full md:w-64 bg-white border-r border-2 border-[#F9FAFB] hidden md:flex flex-col justify-between h-screen">
        <div>
          {/* Logo and Search */}
          <div className="p-6 font-bold text-xl flex items-center space-x-2">
            <img src="/react.svg" alt="" />
            <span>Untitled UI</span>
          </div>

          <div className="px-4 pb-4">
            <div className="flex items-center space-x-2 border border-[#D6BBFB] rounded-lg px-3 py-2 focus-within:ring-1 ring-purple-100">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <input
                type="text"
                placeholder="Olivia Rhye"
                className="text-sm w-full focus:outline-none bg-transparent border-[#D6BBFB]"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-2 space-y-1 text-sm text-gray-700">
            {[
              "Home",
              "Dashboard",
              "Projects",
              "Tasks",
              "Reporting",
              "Users",
              "Support",
              "Settings",
            ].map((label) => (
              <button
                key={label}
                className="flex items-center space-x-3 w-full px-3 py-2 hover:bg-gray-100 rounded"
              >
                {menuIcons[label]}
                <span>{label}</span>
                {label === "Dashboard" && (
                  <span className="ml-auto bg-gray-200 text-xs rounded-full px-2 py-0.5">
                    10
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* New Features Card */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-xl p-4 text-sm">
            <h4 className="font-semibold mb-1 text-gray-900">
              New features available!
            </h4>
            <p className="text-gray-600 mb-3">
              Check out the new dashboard view. Pages now load faster.
            </p>
            <div className="rounded overflow-hidden mb-2">
              <img
                src="/Image.png"
                alt="Dashboard update"
                className="w-full h-28 object-cover"
              />
            </div>
            <div className="flex justify-between items-center text-xs text-gray-600">
              <button className="hover:underline">Dismiss</button>
              <a
                href="#"
                className="text-purple-700 font-medium hover:underline"
              >
                What’s new?
              </a>
            </div>
          </div>
        </div>
      </aside>
        </>
    )
}