import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Login
      </h1>

      <LoginForm />
    </main>
  );
}