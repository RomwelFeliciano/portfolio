import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Home = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10">
        <div className="relative mx-auto bg-gradient-to-b from-[#C8C6C6] rounded-full w-80 h-80 mb-10 overflow-hidden">
          <img className="relative object-cover" src="/profile.png" alt="" />
        </div>
        <h2 className="text-5xl py-2 font-extrabold text-[#4B6587] lg:pt-5">
          Romwel Reyes Feliciano
        </h2>
        <h3 className="typed font-semibold text-3xl pt-4">
          Web Developer and UI/UX Designer
        </h3>
        <p className="text-lg py-5 leading-8 text-gray-900 2xl:px-96">
          A front-end developer who is a Bataan Peninsula State University
          graduate and is currently an intern at Kloudtech. I continued to
          acquire various web designs and layouts and the necessary programming
          skills every day at that time. I also concentrate on honing my
          proficiency with popular frameworks and libraries.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-10">
        <AiFillFacebook />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
    </section>
  );
};

export default Home;
