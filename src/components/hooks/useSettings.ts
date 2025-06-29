import { useState } from "react";

const useSettings = () => {
  const [selectedEmail, setSelectedEmail] = useState("myAccount");
  const [alternativeEmail, setAlternativeEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("Superadmin");

  const handleEmailChange = (emailType: string) => {
    setSelectedEmail(emailType);
  };

  const handleAlternativeEmailChange = (email: string) => {
    setAlternativeEmail(email);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  return {
    selectedEmail,
    alternativeEmail,
    selectedRole,
    handleEmailChange,
    handleAlternativeEmailChange,
    handleRoleChange,
  };
};

export default useSettings;