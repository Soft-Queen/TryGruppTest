type ActiveRoleSelectorProps = {
  activeRole: string;
  setActiveRole: (role: string) => void;
};

export const ActiveRoleSelector = ({ activeRole, setActiveRole }: ActiveRoleSelectorProps) => {
  return (
    <>
         <div className="mb-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:max-w-[30%]">
            <h3 className="font-semibold text-gray-800 mb-4">Active Role</h3>
            <p className="text-sm text-gray-600">
              Select active role available to the user.
            </p>
          </div>
          <div className="w-full md:max-w-[70%]">
            {["Superadmin", "Developeradmin", "Supportadmin"].map((role) => (
              <div
                key={role}
                className={`flex items-center justify-between border p-4 rounded-md mb-3 ${
                  activeRole === role
                    ? "border-[#D6BBFB] bg-[#F9F5FF]"
                    : "border-gray-300"
                }`}
                onClick={() => setActiveRole(role)}
              >
                {/* Left: Icon and details */}
                <div className="flex items-center gap-4">
                  {/* Big user icon badge */}
                  <div className="w-14 h-14 flex items-center justify-center rounded bg-[#FFF] text-[#7F56D9] text-3xl font-bold">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="#ccc"
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
                    <p className="font-semibold text-sm text-[#344054]">{role}</p>
                    <p className="text-xs text-gray-500 mb-2">
                      Last active 06/2023
                    </p>
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
                  className="w-4.5 h-4.5 accent-[#7F56D9]"
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
    </>
  );
}