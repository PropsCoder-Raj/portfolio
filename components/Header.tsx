import Image from "next/image";
import "@/styles/globals.css"; // or wherever your h-shape class is
import { FaAngleDown } from 'react-icons/fa'

export default function Header() {
    return (
        <main className="flex h-screen main-section">

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
            <div className="w-1/2 flex items-center">
                <div className="text-8xl text-white">
                    <h1 className="font-bold mb-4 font-poppins text-heading">Hi, I&apos;m <span className="text-secondary">Rohit</span> <br></br> A <span className="text-heading-highlight">Software</span> Engineer.</h1>
                    {/* <p className="text-lg text-gray-700">
            I&apos;m a Software Developer with over 3 years of experience in web application development, primarily focused on backend development. I specialize in building robust and scalable server-side applications using Node.js, and also have hands-on experience developing responsive front-end interfaces using Angular. My expertise spans across the MEAN stack, and I enjoy delivering solutions that are both functional and efficient.
          </p> */}
                </div>
            </div>

            <a
                href="#about"
                className="absolute bottom-[20] left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
            >
                <div className="text-white">
                    <FaAngleDown className="text-white text-[50] animate__animated animate__shakeY animate__slow" />
                </div>
            </a>
        </main>
    );
}
