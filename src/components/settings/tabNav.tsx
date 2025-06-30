type TabNavProps = {
  tabs: string[];
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

export const TabNav = ({ tabs, setActiveTab, activeTab }: TabNavProps) => {
  return (
    <>
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
    </>
  );
};
