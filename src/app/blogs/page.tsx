"use client";
import Link from "next/link";
import { useState } from "react";

export default function blogs() {

    const [search, setSearch] = useState("");
  // Static blog posts for demo
  const posts = [
    {
      name: "Yusup Guldadov",
      project: "GPS LoRa Telemetry",
      description:
        "Configured a GPS module for a rocket and transmitted data to the ground station using RYLR998 LoRa. Developed a parsing library to process raw GPS data for accurate telemetry.",
      link: "/projects",
    },
    {
      name: "Yusup Guldadov",
      project: "Mini Shell in C++",
      description:
        "Developed a custom shell supporting external commands, built-in commands, piping, redirection, and background jobs. Gained experience in process control and modular C++ programming.",
      link: "/projects",
    },
    {
      name: "Yusup Guldadov",
      project: "RYLR998 LoRa Configuration Guide",
      description:
        "Configured RYLR998 LoRa modules using AT commands. Optimized parameters such as Spreading Factor, Bandwidth, Coding Rate, and Preamble for reliable wireless communication.",
      link: "/projects",
    },
    {
      name: "Yusup Guldadov",
      project: "Auto Caddy Capstone Project",
      description:
        "Designed and implemented an obstacle detection system for an autonomous golf caddy using ultrasonic sensors. Collaborated in a team for component selection, programming, and testing.",
      link: "/projects",
    },
    {
      name: "Yusup Guldadov",
      project: "Computer Vision | Deep Learning",
      description:
        "Pedestrian-Detection-with-Faster-R-CNN, A high-performance pedestrian detection system using Faster R-CNN that identifies people in images with 98% accuracy. Trained on urban scene data, this model can be used for autonomous vehicles, surveillance, and smart city applications.",
      link: "/projects",
    },
  ];

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.project.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <div className="min-h-screen p-10 bg-gray-50">
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center"
      style={{ backgroundImage: "url('/EDA.jpg')" }}
    >
      <h1 className="bg-white text-3xl font-bold  mt-20  text-center">Blogs</h1>

      {/* Search Bar */}
      <div className="bg-white max-w-2xl mx-auto mb-4 p-10">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{post.project}</h3>
              <p className="text-gray-700 mb-2">{post.description}</p>
              <p className="text-gray-500 italic mb-2">By: {post.name}</p>
              {post.link && (
                <Link href={post.link} className="text-blue-500 hover:underline">
                  View Project
                </Link>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>


      <div className="flex justify-center gap-6 mb-10">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Main
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Projects
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
