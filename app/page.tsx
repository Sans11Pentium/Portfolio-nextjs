import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intern from './components/Intern';

export default function Home() {
  return (
    <div className="mx-auto bg-black min-h-screen">
      <main className="px-10">
        <Navbar />
        <Intro />
        <About />
        <div className="flex justify-center">
          <div className="indicator mt-20">
            <span className="indicator-item indicator-start badge badge-secondary"></span>
            <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 mb-10">Education</div>
          </div>
        </div>
        <Education />
        <div className="indicator mt-20 block">
            <span className="indicator-item indicator-end badge badge-secondary"></span>
            <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 p-2">Tech I work with</div>
        </div>
        <Skills />
        <div className="indicator mt-20">
          <span className="indicator-item indicator-start badge badge-secondary"></span>
          <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200">Internships</div>
        </div>
        <Intern />
        <div className="indicator mt-20 block">
          <span className="indicator-item indicator-end badge badge-secondary"></span>
          <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 p-2 mb-5">Projects</div>
        </div>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
