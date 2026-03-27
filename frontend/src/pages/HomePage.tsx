import { useUsers } from '../hooks/useUsers';

function HomePage() {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) return <div className="text-center py-10">Loading users...</div>;
  
  if (isError) return (
    <div className="text-red-500 bg-red-50 p-4 rounded-md">
      Error: {error instanceof Error ? error.message : "Failed to fetch users"}
    </div>
  );

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Overview of all active users in the system.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="mt-2 text-xs text-gray-400">
              Joined: {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
      
      {users?.length === 0 && (
        <p className="text-center text-gray-500 py-10">No users found. Try adding one!</p>
      )}
    </div>
  );
};

export default HomePage;