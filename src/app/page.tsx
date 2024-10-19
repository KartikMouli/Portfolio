import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import ResumeButton from "@/components/ResumeButton";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-16 pb-16 text-white">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          src="/pfp.jpg"
          alt="pfp of Kartik"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-4xl mb-2 font-extrabold text-gradient">
            Kartik Mouli
          </h1>
          <h2 className="text-xl text-gray-300 mb-4">Full Stack Web Developer</h2>
          <h3 className="text-lg text-gray-400 mb-4">📍 Nashik, Maharashtra, India</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Building Real Products For Real Clients, Not Just More Projects
          </p>

          <section className="mt-8 flex items-center gap-8">
            <ResumeButton />
            <Socials />
          </section>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-100 border-b-2 border-gray-700 pb-2">
          Education
        </h2>
        <Education />
      </section>

      <section className="flex flex-col gap-8">

        <div className="flex justify-between items-center border-b-2 border-gray-700 pb-3">
          <h2 className="text-3xl font-bold  text-gray-100 ">Featured Projects</h2>
          <Link href="/projects" className="link flex items-center gap-2 font-light">
            <ArrowRightIcon className="size-5" />
            <span>view more</span>
          </Link>
        </div>

        <Projects limit={2} />
      </section>
    </div>
  );
}
