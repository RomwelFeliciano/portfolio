import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <>
      <main className="bg-sky-200 px-9 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-bold font-mono">Ryoma</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-t from-teal-500 to-teal-300 py-2 px-4 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 font-mono">
            <h2 className="text-5xl py-2 font-bold text-teal-800">
              Romwel Reyes Feliciano
            </h2>
            <h3 className="text-2xl py-2">Web Developer and UI/UX Designer</h3>
            <p className="text-lg py-5 leading-8 text-gray-900">
              Currently a fourth-year information technology major in network
              and web application who hopes to complete my field of study and
              land a job in it. I improved my hardware skills, particularly
              cable management and computer assembly and disassembly, after my
              work immersion at LGU Orani Bataan. I perform well in
              collaborative groups because I am a strong leader and an example
              to my fellow students.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10">
            <AiFillFacebook />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <img className="relative object-cover" src="/profile.png" alt="" />
          </div>
        </section>
        {/* Skills Section */}
        <section className="min-h-screen font-mono">
          <div>
            <h3 className="text-4xl pt-20 font-bold mb-5">My Expertise</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  HTML - <span className="text-teal-500">Advanced</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">6 years of experience</h4>
                  <li>4 months as an Intern</li>
                  <li>4 years in College</li>
                  <li>2 years in SHS</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  CSS - <span className="text-teal-500">Advanced</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">6 years of experience</h4>
                  <li>4 months as an Intern</li>
                  <li>4 years in College</li>
                  <li>2 years in SHS</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  JavaScript -
                  <span className="text-teal-500">Intermediate</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">3 years of experience</h4>
                  <li>4 months as an Intern</li>
                  <li>3 years in College</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  PHP - <span className="text-teal-500">Basic</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">1 year of experience</h4>
                  <li>1 year in College</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  jQuery - <span className="text-teal-500">Intermediate</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">2 years of experience</h4>
                  <li>4 months as an Intern</li>
                  <li>2 years in College</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  MySQL - <span className="text-teal-500">Intermediate</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">3 years of experience</h4>
                  <li>4 months as an Intern</li>
                  <li>3 years in College</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  Bootstrap - <span className="text-teal-500">Advanced</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">5 years of experience</h4>
                  <li>2 months as an Intern</li>
                  <li>4 years in College</li>
                  <li>1 year in SHS</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  Tailwind CSS - <span className="text-teal-500">Basic</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">1 month of experience</h4>
                  <li>1 month self learning</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  React - <span className="text-teal-500">Basic</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">1 month of experience</h4>
                  <li>1 month Self Study</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center rounded-lg bg-[#001C30]">
              <img
                class="h-40 w-40 rounded-t-lg object-cover p-5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <div class="flex flex-col justify-start px-5 my-5">
                <h5 class="text-xl font-bold text-neutral-800 dark:text-neutral-50">
                  Github - <span className="text-teal-500">Intermediate</span>
                </h5>
                <ul class="list-disc list-inside text-white">
                  <h4 className="font-medium">1 year of experience</h4>
                  <li>1 year self learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
