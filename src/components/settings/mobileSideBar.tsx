import { menuIcons } from "../../utilities/menuIcons";

type MobileSidebarDrawerProps = {
    onClose: () => void;
};
export const MobileSidebarDrawer = ({onClose}: MobileSidebarDrawerProps) => {
    return(
        <>
            <div className="fixed inset-0 z-40 bg-black/30" onClick={onClose}>
          <div
            className="bg-white w-64 h-full p-6 absolute left-0 top-0 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={onClose}>
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
        </>
    )
}