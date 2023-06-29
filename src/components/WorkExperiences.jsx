import React from "react";

const WorkExperiences = () => {
  return (
    <section className="min-h-screen">
      <h3 className="text-3xl mt-20 font-bold">Work Experiences</h3>
      <div className="grid lg:grid-cols-2 gap-10 mt-5">
        <div className="flex w-full">
          <div className="bg-[#001C30] p-4 flex flex-col rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl text-white">
                Internship -
                <span className="text-teal-500"> Kloudtech Company</span>
              </h2>
              <h3 className="text-lg text-white mt-2">March 2023 - Present</h3>
              <p className="text-white text-base mt-2">
                As a Web Developer and Web Designer, I managed different
                business websites and web applications for the company, gaining
                versatile knowledge and skills.
              </p>
            </div>
            <div className="flex items-center">
              <div class="pt-1 pb-1">
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #HTML
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #CSS
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #JS
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #jQuery
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="bg-[#001C30] p-4 flex flex-col rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl text-white">
                OJT (324 Hours) -
                <span className="text-teal-500"> Kloudtech Company</span>
              </h2>
              <h3 className="text-lg text-white mt-2">March 2023 - May 2023</h3>
              <p className="text-white text-base mt-2">
                During my OJT, I created a simple landing page for the company
                and a web application that monitors weather station data and
                forecasts weather using an API.
              </p>
            </div>
            <div className="flex items-center">
              <div class="pt-1 pb-1">
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #HTML
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #CSS
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #JS
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #jQuery
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="bg-[#001C30] p-4 flex flex-col rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl text-white">
                Technical Team -
                <span className="text-teal-500">
                  {" "}
                  RAITE (Regional Assembly on Information Technology Education)
                </span>
              </h2>
              <h3 className="text-lg text-white mt-2">November 12, 2021</h3>
              <p className="text-white text-base mt-2">
                I sorted the participants into their appropriate tasks during
                the event and created a streaming program for the events. I also
                started shoutcasting in League of Legends tournament.
              </p>
            </div>
            <div className="flex items-center">
              <div class="pt-1 pb-1">
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Adaptability
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Communication
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Leadership
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Teamwork
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="bg-[#001C30] p-4 flex flex-col rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl text-white">
                Work Immersion -
                <span className="text-teal-500"> LGU Orani</span>
              </h2>
              <h3 className="text-lg text-white mt-2">December 2018</h3>
              <p className="text-white text-base mt-2">
                I did some work as a data entry on Excel, but mainly focused on
                hardware tasks such as building a PC, connecting different
                cables, and maintaining the Server and Switch.
              </p>
            </div>
            <div className="flex items-center">
              <div class="pt-1 pb-1">
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Excel
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Word
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Cable Management
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                  #Network Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperiences;
