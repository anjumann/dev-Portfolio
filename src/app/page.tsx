import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skill from "@/components/home/Skill";
import Social from "@/components/home/Social";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Skill />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className="">
        <Social />
      </div>
    </>
  )
}
