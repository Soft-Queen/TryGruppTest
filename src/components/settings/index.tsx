import React, { useState } from "react";
import UserTable from "./userTable";
import { MobileTopBar } from "./mobileTopBar";
import { MobileSidebarDrawer } from "./mobileSideBar";
import { DesktopSidebar } from "./desktopSidebar";
import { ActiveRoleSelector } from "./activeRoleSelector";
import { TabNav } from "./tabNav";
import ConnectedEmail from "./connectedEmail";

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
      <MobileTopBar onMenuClick={toggleDrawer} />

      {/* Mobile Sidebar Drawer */}
      {isDrawerOpen && <MobileSidebarDrawer onClose={closeDrawer} />}

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-10 py-8">
        <TabNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <ConnectedEmail />

        <ActiveRoleSelector
          activeRole={activeRole}
          setActiveRole={setActiveRole}
        />
        <UserTable />
      </main>
    </div>
  );
};

export default SettingsPage;
