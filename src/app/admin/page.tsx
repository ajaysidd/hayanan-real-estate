import LogoutButton from "@/components/auth/logout-button";

export default function AdminDashboardPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <LogoutButton />
      </div>

      <p>
        Manage properties, projects, agents and inquiries.
      </p>
    </main>
  );
}