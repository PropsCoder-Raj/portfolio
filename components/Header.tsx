import Image from "next/image";
import "@/styles/globals.css"; // or wherever your h-shape class is

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen">
      
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center bg-white overflow-hidden">
        {/* h-shape background */}
        <div className="h-shape"></div>

        {/* Foreground image */}
        <div className="relative w-[70%] h-[90%] rounded-xl overflow-hidden shadow-lg group z-10">
          <Image
            src="/img/hero.jpg"
            alt="Sample"
            fill
            className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center pr-[50]">
        <div className="text-8xl text-white">
          <h1 className="font-bold mb-4 font-poppins text-heading">Hi, I&apos;m <span className="text-secondary">Rohit</span> A <span className="text-heading-highlight">Software</span> Developer.</h1>
          <p className="text-lg text-gray-700">
            I&apos;m a Software Developer with over 3 years of experience in web application development, primarily focused on backend development. I specialize in building robust and scalable server-side applications using Node.js, and also have hands-on experience developing responsive front-end interfaces using Angular. My expertise spans across the MEAN stack, and I enjoy delivering solutions that are both functional and efficient.
          </p>
        </div>
      </div>

    </main>
  );
}
