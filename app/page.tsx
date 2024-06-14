import Image from "next/image";
import Head from "next/head";
import { SocialIcon } from 'react-social-icons';
import "./globals.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function Home() {
  return (
    <div>
      <main className="px-10">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="px-2 text-2xl"><BsFillMoonStarsFill/></h1>
            <ul className="flex items-center nav-list">
              <li className="p-2">
                <a href="#home">Home</a>
              </li>
              <li  className="p-2">
                <a href="#About">About</a>
              </li>
              <li  className="p-2">
                <a href="#Projects">Projects</a>
              </li>
              <li  className="p-2">
                <a href="#contact">Contact</a>
              </li> 
            </ul>
            <details className="dropdown toggler">
              <summary className="m-1 btn text-2xl">
                <GiHamburgerMenu/>
              </summary>
              <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
              </ul>
            </details>
          </nav>
          <div className="flex justify-between px-20 pt-10 pb-10">
            <div className="flex flex-col">
              <h1 className="text-4xl font-medium p-2 text-teal-400">Hi there!</h1>
              <p className="text-2xl p-2">I am <span className="text-white">Sanskriti</span></p>
              <p className="text-xl p-2">Thanks for visiting my website</p>
              <p className="text-teal-500 beat">&#10084;</p>
            </div>
            <div className="rounded-md h-40 w-40">
              <img className="rounded-full" src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user" alt="sanskriti"></img>
            </div>
          </div>
        </section>
        <div className="about mt-20">
          <div className="resume flex flex-col items-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://www.myperfectresume.com/wp-content/uploads/2022/09/interest.svg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">My latest Resume</h2>
                  <p>Any feedbacks would be highly appreciated!</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Now<span className="loading loading-ring loading-md"></span></button>
                  </div>
                </div>
            </div>
          </div>
          <div className="indicator mt-20">
            <span className="indicator-item indicator-start badge badge-secondary"></span>
            <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200">Internships</div>
          </div>
          <div className="intern flex justify-between mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Web development Intern</h2>
                <p>Solid State Physics Laboratory</p>
                <p>Built Personel Information System for office staff</p>
                <p>May - June 2024</p>
              </div>
              <figure><img src="https://data1.ibtimes.co.in/en/full/727208/drdo.png?h\u003d450\u0026l\u003d50\u0026t\u003d40" alt="Shoes" /></figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">MERN TA</h2>
                <p>Apna College</p>
                <p>Debugged MERN related projects of batch students</p>
                <p>Feb - April 2024</p>
              </div>
              <figure><img src="https://cdn-1.webcatalog.io/catalog/apna-college/apna-college-social-preview.png?v=1714776932959" alt="Shoes" /></figure>
            </div>
          </div>
          <div className="indicator mt-20">
            <span className="indicator-item indicator-start badge badge-secondary"></span>
            <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 mb-10">Education</div>
          </div>
          <div className="education">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/12/Pictures/_fa7b4cb0-d521-11e9-98d7-43b78744c7ea.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className="text-lg font-black">Class 10</div>
                      <time className="font-mono italic">2019 - 2020</time>
                      <p>St. Mark's World School</p>
                      <p>94.8%</p>
                    </div>
                  </div>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                      <figure><img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/12/Pictures/_fa7b4cb0-d521-11e9-98d7-43b78744c7ea.jpg" alt="Shoes" /></figure>
                      <div className="card-body">
                        <div className="text-lg font-black">Class 12</div>
                        <time className="font-mono italic">2021 - 2022</time>
                        <p>St. Mark's World School</p>
                        <p>97%</p>
                      </div>
                  </div>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://qph.cf2.quoracdn.net/main-qimg-76d512d1dda6e9c6fadd11fb59a8f73d-lq" alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className="text-lg font-black">BTech CSE</div>
                      <time className="font-mono italic">2022 - 2026</time>
                      <p>NSUT, Dwarka, New Delhi</p>
                      <p>Sem wise CGPA</p>
                      <ul className="steps">
                        <li className="step step-primary">9.60</li>
                        <li className="step step-primary">9.00</li>
                        <li className="step step-primary">9.60</li>
                        <li className="step step-primary">9.20</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="bg-primary" />
              </li>
            </ul>
          </div>
          <div className="indicator mt-20 block">
            <span className="indicator-item indicator-end badge badge-secondary"></span>
            <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 p-2">Tech I work with</div>
          </div>
          <div className="tech my-20 px-10">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="react" />
              <p className="text-white text-xl font-mono font-bold">React JS</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="express" />
              <p className="text-white text-xl font-mono font-bold">Express JS</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="node" />
              <p className="text-white text-xl font-mono font-bold">Node.js</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="materialUI" />
              <p className="text-white text-xl font-mono font-bold">Material UI</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png" alt="tailwindCSS" />
              <p className="text-white text-xl font-mono font-bold">Tailwind CSS</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="bootstrap" />
              <p className="text-white text-xl font-mono font-bold">Bootstrap</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html5" />
              <p className="text-white text-xl font-mono font-bold">HTML5</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" />
              <p className="text-white text-xl font-mono font-bold">CSS3</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="js" />
              <p className="text-white text-xl font-mono font-bold">Javascript</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/offices/48/000000/php-logo.png" alt="php" />
              <p className="text-white text-xl font-mono font-bold">PHP</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="python" />
              <p className="text-white text-xl font-mono font-bold">Python</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="cpp" />
              <p className="text-white text-xl font-mono font-bold">C++</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mogodb" />
              <p className="text-white text-xl font-mono font-bold">MongoDB</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="mysql" />
              <p className="text-white text-xl font-mono font-bold">MySQL</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://img.icons8.com/color/48/000000/git.png" alt="gitvcs" />
              <p className="text-white text-xl font-mono font-bold">Git VCS</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" alt="daisyui" />
              <p className="text-white text-xl font-mono font-bold">Daisy UI</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://www.openxcell.com/wp-content/uploads/2021/11/dango-inner-2.png" alt="nextjs" />
              <p className="text-white text-xl font-mono font-bold">Next.js</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://cdn-icons-png.freepik.com/512/8345/8345929.png" alt="ml" />
              <p className="text-white text-xl font-mono font-bold">Machine Learning</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/4824/4824797.png" alt="datascience" />
              <p className="text-white text-xl font-mono font-bold">Data Science</p>
            </div>
            <div className="bg-black h-40 rounded-xl flex justify-center p-10 skill-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s" alt="flask" />
              <p className="text-white text-xl font-mono font-bold">Flask</p>
            </div>
          </div>
          </div>
        </div>

        <div className="indicator mt-20 block">
          <span className="indicator-item indicator-end badge badge-secondary"></span>
          <div className="grid w-64 h-32 bg-base-300 place-items-center font-medium text-4xl text-teal-200 p-2 mb-5">Projects</div>
        </div>
        <div className="project flex justify-center flex-wrap">

          <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://static.vecteezy.com/system/resources/previews/041/416/657/non_2x/hr-software-illustration-hand-drawn-composition-with-laptop-and-company-employees-human-resources-information-system-icon-career-management-concept-team-forming-business-network-vector.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">PIS DRDO</h2>
              <p>Full stack Personel Information System for office staff.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://img.freepik.com/free-photo/cartoon-style-character-traveling_23-2151129759.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Wanderlust</h2>
              <p>Full stack Travelling website</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><img src="https://media.istockphoto.com/id/1289754710/vector/web-scraping-isometric-web-banner-data-extraction-software-isometry-concept-process-of.jpg?s=612x612&w=0&k=20&c=adex03lGb5IRHeAL5PAmYMAkcX-MQJt9mTslAGcXhHo=" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flask web scrapper</h2>
              <p>Full stack Flask application</p>
              <p>Scrapes multiple websites and gives result in tabular format</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
          <figure><img src="https://media.sproutsocial.com/uploads/2023/07/Sentiment-analysis-HUB-Final.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Twitter US sentiment analysis</h2>
            <p>Analysis Twitter posts of US airline using NLP</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Github</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">More Projects</h2>
            <p>For more projects do visit my Github profile</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go Now</button>
            </div>
          </div>
        </div>

        </div>
        <div className="contact flex flex-col align-middle py-20 px-20 my-20 rounded-xl bg-slate-700 mx-20">
          <p className="text-2xl">Contact me</p>
          <label className="input input-bordered flex items-center gap-2 my-2">
            Name:
            <input readOnly value="Sanskriti" type="text" className="grow"/>
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Email:
            <input readOnly value="sanskriti.3026@gmail.com" type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Phone:
            <input readOnly value="9667661646" type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Where:
            <input readOnly value="New Delhi, India-110018" type="text" className="grow" />
          </label>
          <p className="text-center font-thin mt-4">Connect with me over socials!</p>
        </div>


        <footer className="py-10 flex-col align-middle">
          <div className="flex justify-center">
            <div className="mr-5">
              <SocialIcon bgColor="gray" url="https://github.com" />
            </div>
            <div className="mr-5">
              <SocialIcon url="https://linkedin.com" />
            </div>
            <div className="mr-5">
              <SocialIcon url="https://gmail.com" />
            </div>
            <div className="mr-5">
              <SocialIcon url="https://leetcode.com" />
            </div>
          </div>
          <div className="pt-12 text-center">
            Made with &#10084; by Sanskriti | Copyright | Privacy terms
          </div>
        </footer>
      </main>
    </div>
  );
}