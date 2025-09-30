import Link from "next/link";


export default function Projects() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-10 gap-10 sm:p-20">
      <h1 className="text-3xl font-bold">Software & Hardware Projects</h1>
      <div className="max-w-4xl w-full space-y-8">
        

        <section>
          <h2 className="text-2xl font-semibold mb-4">Software Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Wellness App</strong> - Collaborated on “MyWellnessBuddy”, 
              a holistic food logging app in a dynamic team of six, 
              applying agile methodology. 
              Contributed as a backend developer, 
              utilizing JavaScript and MongoDB for backend, 
              and React Native and Expo Go for frontend. 
              Enhanced collaborative coding and agile project management skills. 
              <a href="https://github.com/YusufGuldadov/Wellness-app" className="text-blue-500 underline">GitHub</a>
            </li>
            <li>
              <strong>Mini Shell (myshell)</strong>-Developed a custom command-line shell in C++ that mimics core functionality of bash/sh.
              Implemented command execution with arguments, built-in commands (cd, exit, help),
              background jobs, input/output redirection, and piping.
              Gained hands-on experience with process control (fork(), execvp(), waitpid()), 
              string parsing, file I/O, and modular program design. 
              Practiced creating a fully functional, low-level system application with robust error handling and command history.
              <a href="https://github.com/YusufGuldadov/MYSHELL" className="text-blue-500 underline">GitHub</a>
            </li>
            <li>
              <strong>Channel-Based Tool</strong> - Independently developed
               in 4 weeks with ReactJS, MySQL integration, user accounts, 
               nested replies, rating, and search features. 
               Significantly improved independent development and full-stack 
               implementation abilities. 
               <a href="https://github.com/YusufGuldadov/Channel-Based-Tool" className="text-blue-500 underline">GitHub</a>
            </li>
          </ul>
        </section>

      
        <section>
          <h2 className="text-2xl font-semibold mb-4">System Verilog Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Designed and implemented an <strong>8-bit microprocessor on FPGA</strong>, 
              using System Verilog, with meticulous debugging and testing using Quartus and QuestaSim.
              Deepened understanding of hardware design and verification through complex digital system implementation.
             <a href="https://github.com/YusufGuldadov/4-bit-Microprocessor" className="text-blue-500 underline">GitHub</a>
            </li>
            <li>
              Utilized a <strong>finite state machine</strong> 
              approach for the traffic light controller and hotel door lock on FPGA,
               leveraging a virtual logic analyser Signal Tap for efficient debugging.
                <a href="https://github.com/YusufGuldadov/-Hotel-door-lock-and-traffic-light-controller-on-FPGA" className="text-blue-500 underline">GitHub</a>
            </li>
          </ul>
        </section>

     
        <section>
          <h2 className="text-2xl font-semibold mb-4">Auto Caddy Capstone Project</h2>
          <p>
            Designed and implemented an obstacle detection system for 
            an autonomous golf caddy using ultrasonic sensors, 
            achieving 90% accuracy through 600 tests. 
            Collaborated in a team of four on component selection, 
            C programming, calculations, documentation, and successful project presentations,
             gaining strong technical and project management skills. 
             <a href="https://github.com/YusufGuldadov/Auto-Caddy" className="text-blue-500 underline">GitHub</a>
          </p>
        </section>
      </div>
      <p className="text-sm text-gray-500">End of Projects</p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">USST Rocketry Team</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <p><strong>RYLR998 LoRa Module Configuration</strong> - Configured RYLR998 LoRa modules 
            using AT commands for reliable wireless communication. 
            Set frequency bands (915/868/433 MHz) based on regional regulations, 
            and optimized LoRa parameters including Spreading Factor, Bandwidth, Coding Rate, 
            and Preamble for range, speed, and reliability. 
            Configured Device Address and Network ID to enable multiple nodes to communicate within the same network. 
            Gained hands-on experience with radio configuration, 
            fine-tuning carrier frequency, and understanding trade-offs 
            between data rate, range, and error resilience.</p>
            <a href='https://github.com/YusufGuldadov/RYLR998_LoRa_module' className="text-blue-500 underline">GitHub</a>

          </li>

          <li> <p>I configured a GPS module for a rocket to accurately capture 
              its position data and integrated the RYLR998 LoRa module 
              to transmit this GPS data in real-time from the rocket to 
              a ground station. To ensure reliable and usable information, 
              I developed a custom filter and parsing library that processed the 
              raw GPS output, extracting precise latitude, longitude, and altitude 
              data. This project enhanced my skills in embedded systems, 
              wireless communication, and data processing, demonstrating the 
              ability to handle real-time telemetry and implement robust software 
              for hardware integration.
              </p>
          </li>
        </ul>
      </section>


       
      <div className="flex justify-center gap-6 mb-10">
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Main
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