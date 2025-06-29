export  const  fetchUserRoles = async () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(`${baseUrl}/roles`);
  if (!res.ok) throw new Error("Failed to fetch roles");
  return res.json();
}