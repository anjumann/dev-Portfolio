import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Skill from "@/components/home/Skill";

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
    </>
  )
}
