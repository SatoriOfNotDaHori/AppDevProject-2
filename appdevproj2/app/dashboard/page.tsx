// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen p-8 sm:p-20 bg-gradient-to-b from-blue-100 to-black">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600">
          Welcome to Calorie Counter
        </h1>
        <p className="text-xl text-gray-700">
          Your personal assistant for tracking daily calorie intake
        </p>
      </header>



      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/signup"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition text-center"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition text-center"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
