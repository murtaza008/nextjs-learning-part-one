// app/dashboard/page.tsx
// Agar ek page pe multiple APIs se data chahiye

export default async function DashboardPage() {
  // GALAT TARIKA — ek ke baad ek fetch hoti hai (slow)
  // const users = await fetch('/api/users')
  // const posts = await fetch('/api/posts')     ← pehli finish hone ka wait karta hai
  // const stats = await fetch('/api/stats')     ← dono finish hone ka wait karta hai

  // SAHI TARIKA — teeno ek saath fetch hoti hain (fast)
  // Promise.all = sab fetch ek saath shuru karo, sab finish hone ka wait karo
  const [usersRes, postsRes, statsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  // Teeno responses ko json mein convert karo
  const [users, posts, stats] = await Promise.all([
    usersRes.json(),
    postsRes.json(),
    statsRes.json(),
  ]);

  return (
    <div className="container mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-600">Total Users</p>
          <p className="text-3xl font-bold text-blue-900">{users.length}</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl">
          <p className="text-sm text-green-600">Total Posts</p>
          <p className="text-3xl font-bold text-green-900">{posts.length}</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl">
          <p className="text-sm text-purple-600">Total Todos</p>
          <p className="text-3xl font-bold text-purple-900">{stats.length}</p>
        </div>
      </div>
    </div>
  );
}
