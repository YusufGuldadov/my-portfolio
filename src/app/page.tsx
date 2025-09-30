import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-contain bg-center bg-no-repeat flex flex-col justify-between items-center"
      style={{ backgroundImage: "url('/alumni.png')" }}
    >
      {/* About Section */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <Image
          src="/me.jpg"
          alt="My Photo"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />

        <div className="bg-white/70 rounded-xl shadow-lg max-w-lg text-center mt-6 p-6">
          <h1 className="text-2xl font-bold mb-4">Yusup Guldadov</h1>
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-relaxed text-lg font-bold">
            I recently graduated with a degree in Computer Engineering from University of
            Saskatchewan, where I built a strong foundation in both software and hardware
            systems. Throughout my studies, I worked on projects ranging from web
            applications to embedded systems, gaining valuable experience in
            problem-solving and system design. I also explored the field of artificial
            intelligence, which deepened my interest in automation and intelligent
            systems. My background reflects a balance of low-level engineering skills and
            modern software development, and I am eager to apply this knowledge to create
            innovative solutions in real-world applications.
          </p>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="flex justify-center gap-6 mb-10">
        <Link
          href="/projects"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Projects
        </Link>

        <Link
          href="/blogs"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Blogs
        </Link>

        <Link
          href="/contacts"
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
}
