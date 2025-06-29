import { useEffect, useState } from "react";
import { fetchUserRoles } from "../../utilities/fetchUserRoles";

export interface UserRole {
  id: number;
  name: string;
  date: string;
  status: "Active" | "Inactive";
  type: string;
  totalUser: number;
}
export const useUserRoles = () => {
  const [userRoles, setUserRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserRoles()
      .then(setUserRoles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { userRoles, loading, error };
}