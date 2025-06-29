import { useUserRoles, type UserRole } from "../hooks/useUserRoles";

const UserTable = () => {
   const { userRoles, loading, error } = useUserRoles();
   console.log(userRoles);
   
     if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">User Roles</h4>
       <button className="hidden md:block text-sm text-blue-600 hover:underline">Download all</button>
      </div>

      {/* Table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500 rounded">
            <tr className="border-b border-gray-200 ">
              <th className="py-2"><input type="checkbox" /></th>
              <th className="py-2">Name</th>
              <th className="py-2">Type</th>
              <th className="py-2">Date Created</th>
              <th className="py-2">Status</th>
              <th className="py-2">Role Users</th>
            </tr>
          </thead>
          <tbody>
            {userRoles.map((role: UserRole, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50 py-5">
                <td className="py-3"><input type="checkbox" /></td>
                <td className="py-5">{role.name}</td>
                <td>{role.type}</td>
                <td>{role.date}</td>
                <td>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    role.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {role.status}
                  </span>
                </td>
                <td>
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(role.totalUser, 3))].map((_, j) => (
                      <img
                        key={j}
                        src={`https://i.pravatar.cc/150?img=${j + 10}`}
                        className="w-6 h-6 rounded-full border-2 border-white"
                        alt="User"
                      />
                    ))}
                    {role.totalUser > 3 && (
                      <span className="text-xs text-gray-500 ms-2">+{role.totalUser - 3}</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
     <div className="md:hidden">
  {/* Header Row */}
  <div className="flex justify-between items-center border border-gray-200 rounded-t-lg px-4 py-3 text-sm font-medium text-gray-700 bg-white">
    <span className="flex items-center gap-2">
      <input type="checkbox" className="form-checkbox" />
      Name
    </span>
    <span>Date Created</span>
  </div>

  {/* Data Rows */}
  {userRoles.map((role: UserRole, i) => (
    <div
      key={i}
      className="flex justify-between items-center px-4 py-4 border-t border-gray-200 text-sm bg-white"
    >
      <label className="flex items-center gap-2 font-medium text-gray-900">
        <input type="checkbox" className="form-checkbox" />
        {role.name}
      </label>
      <a href="#" className="text-[#6941C6] text-sm  whitespace-nowrap">
        {role.date}
      </a>
    </div>
  ))}
</div>

    </div>
  );
};

export default UserTable;
