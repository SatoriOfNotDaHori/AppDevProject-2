// app/signup/page.tsx

import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:p-20 bg-gradient-to-b from-blue-100 to-black">
      <h1 className="text-4xl font-bold mb-8">Create an Account</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/login"
          className="text-blue-500 hover:underline">Log In
        </Link>
      </p>
    </div>
  );
}
