import React, { useState } from "react";
import UserTable from "./userTable";
import { menuIcons } from "../../utilities/menuIcons";

const SettingsPage: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [activeRole, setActiveRole] = useState("Superadmin");
  const tabs = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Roles",
    "Notifications",
    "Integrations",
    "API",
  ];

  const [activeTab, setActiveTab] = useState("My details");

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative overflow-x-hidden">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-[#F9FAFB] p-4 flex items-center justify-between sticky top-0 z-30">
        <div className=" flex items-center space-x-2">
          <img src="/react.svg" alt="" />
          <h1 className="text-lg font-bold">Untitled UI</h1>
        </div>
        <button className="text-gray-600" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={closeDrawer}>
          <div
            className="bg-white w-64 h-full p-6 absolute left-0 top-0 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={closeDrawer}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-2 text-sm">
              {[
                "Home",
                "Dashboard",
                "Projects",
                "Tasks",
                "Reporting",
                "Users",
                "Support",
                "Settings",
              ].map((item) => (
                <button
                  key={item}
                  className="flex items-center space-x-3 w-full px-3 py-2 hover:bg-gray-100 rounded"
                >
                  {menuIcons[item]}
                  <span>{item}</span>
                  {item === "Dashboard" && (
                    <span className="ml-auto bg-gray-200 text-xs rounded-full px-2 py-0.5">
                      10
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
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

      {/* Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-10 py-8">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage your team and preferences here.
        </p>

      <div className="flex gap-2 mb-6 text-sm overflow-x-auto">
  <div className="overflow-x-auto">
    <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium text-gray-800 whitespace-nowrap
            border-r border-gray-200 last:border-r-0
            ${
              tab === activeTab
                ? "bg-white shadow-sm"
                : "bg-gray-50 hover:bg-gray-100"
            }
            ${idx === 0 ? "rounded-l-md" : ""}
            ${idx === tabs.length - 1 ? "rounded-r-md" : ""}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
</div>
        <div className="mb-8 border-b border-[#EAECF0]">
          <h5>User Roles</h5>
          <p className="text-[#667085] text-sm pb-5">
            Update your roles details and information.
          </p>
        </div>
        <div className="mb-8 flex  flex-col md:flex-row">
          <div className="w-full md:max-w-[15%]">
            <h3 className="font-semibold mb-1 text-[#344054]">
              Connected Email
            </h3>
            <span className="text-sm text-[#667085] tracking-normal">
              Select role account
            </span>
          </div>
          <div className=" gap-2 w-full md:max-w-[80%]">
            <label className="flex items-center gap-2 mb-1 text-[#344054] text-sm leading-5">
              <input type="radio" name="email" className="w-4 h-4 accent-[#7F56D9]" defaultChecked />
              <span>My account email</span>
            </label>
            <label className="flex items-center gap-2 mb-1 text-[#344054] text-sm leading-5">
              <input type="radio" name="email" className="w-4 h-4 accent-[#7F56D9]"/>
              <span>An alternative email</span>
            </label>
            <input
              type="email"
              placeholder="billing@untitledui.com"
              className="border border-[#D0D5DD] rounded-md p-2 w-full max-w-[50%] text-sm text-gray-800 accent-[#7F56D9] focus:outline-none focus:ring-1 focus:ring-[#D6BBFB]"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:max-w-[30%]">
            <h3 className="font-semibold text-gray-800 mb-4">Active Role</h3>
            <p className="text-sm text-gray-600">
              Select active role available to the user.
            </p>
          </div>
          <div className="w-full md:max-w-[70%]">
          {["Superadmin", "Developeradmin", "Supportadmin"].map((role, index) => (
              <div
                key={role}
                className={`flex items-center justify-between border p-4 rounded-md mb-3 ${
                  activeRole === role ? "border-[#D6BBFB] bg-[#F9F5FF]" : "border-gray-300"
                }`}
                onClick={() => setActiveRole(role)}
              >
                {/* Left: Icon and details */}
                <div className="flex items-center gap-4">
                  {/* Big user icon badge */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F4EBFF] text-[#7F56D9] text-3xl font-bold">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.25a7.25 7.25 0 0115 0v.25a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.25z"
                      />
                    </svg>
                  </div>
                  {/* Details */}
                  <div>
                    <p className="font-semibold text-lg">{role}</p>
                    <p className="text-xs text-gray-500 mb-2">Last active 06/2023</p>
                    <div className="flex gap-2 mt-1 text-xs text-[#6941C6]">
                      <button>Set as default</button>
                      <button>Edit</button>
                    </div>
                  </div>
                </div>
                {/* Right: Radio */}
                <input
                  type="radio"
                  name="role"
                  checked={activeRole === role}
                  onChange={() => setActiveRole(role)}
                  className="w-5 h-5 accent-[#7F56D9]"
                />
              </div>
            ))}
            <button className="flex items-center gap-2 text-[#667085] hover:text-[#6941C6] text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add role to user
            </button>
          </div>
        </div>

        <UserTable />
      </main>
    </div>
  );
};

export default SettingsPage;
