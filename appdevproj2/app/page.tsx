import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    // First Section
    <div className="background-image-class flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[75vh] p-4 sm:p-10 bg-white bg-opacity-80">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600">
          Calorie Compass
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-lg">
          Achieve your fitness goals by tracking what you eat. Our app holds you accountable for your daily intake and helps you stay on track with your health journey.
        </p>
      </div>

      {/* {http://www.zombieipsum.com/ } */}
      {/* Second Secton */}
      <div className="relative flex flex-col items-center justify-center p-8 sm:p-20 bg-white bg-opacity-80 -mt-12">
        <div className="bg-white py-8 px-6 max-w-lg mx-auto shadow-lg mb-8">
          <p className="text-blue-600 text-xl font-bold mb-4">Dynamic White Block</p>
          <p className="text-gray-700">
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
          </p>
        </div>

        {/* Third Sectoin */}
        <div className="bg-white py-8 px-6 max-w-lg mx-auto shadow-lg mb-8">
          <p className="text-blue-600 text-xl font-bold mb-4">Dynamic White Block</p>
          <p className="text-gray-700">
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
          </p>
        </div>

        {/* Fourth Section*/}
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">
          Track Your Calories Effortlessly
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-lg mb-8">
          Input your meals, monitor your daily caloric intake, set personal health goals, and stay motivated with our streak system. Visualize your progress through detailed graphs and improve your eating habits over time.
        </p>

        {/* Fifth */}
        <div className="flex justify-center gap-6 w-full sm:w-auto z-20 mt-10">
          <Link href="/signup" className="btn-primary">
            Sign up!
          </Link>
          <Link href="/login" className="btn-secondary">
            Log In!
          </Link>
          <Link href="/dashboard" className="btn-secondary">
            Dashboard!
          </Link>
        </div>
      </div>
    </div>
  );
}
