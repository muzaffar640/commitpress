import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceAndSkills from "./components/ExperienceAndSkills";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ExperienceAndSkills />
      <Blog />
    </main>
  );
}
