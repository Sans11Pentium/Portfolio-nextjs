import Image from 'next/image';

const Projects = () => {
    return (
      <div id="projects" className="project flex justify-center flex-wrap">
        {/* Repeat the structure for each project item */}
        <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
          <figure><Image src="https://static.vecteezy.com/system/resources/previews/041/416/657/non_2x/hr-software-illustration-hand-drawn-composition-with-laptop-and-company-employees-human-resources-information-system-icon-career-management-concept-team-forming-business-network-vector.jpg" width={400} height={225} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">PIS DRDO</h2>
            <p>Full stack Personel Information System for office staff.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><a href="https://github.com/Sans11Pentium">Github</a></button>
            </div>
          </div>
        </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><Image src="https://img.freepik.com/free-photo/cartoon-style-character-traveling_23-2151129759.jpg" alt="Shoes" width={400} height={225} /></figure>
            <div className="card-body">
              <h2 className="card-title">Wanderlust</h2>
              <p>Full stack Travelling website</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><a href="https://github.com/Sans11Pentium">Github</a></button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
            <figure><Image src="https://media.istockphoto.com/id/1289754710/vector/web-scraping-isometric-web-banner-data-extraction-software-isometry-concept-process-of.jpg?s=612x612&w=0&k=20&c=adex03lGb5IRHeAL5PAmYMAkcX-MQJt9mTslAGcXhHo=" width={400} height={225} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flask web scrapper</h2>
              <p>Full stack Flask application</p>
              <p>Scrapes multiple websites and gives result in tabular format</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><a href="https://github.com/Sans11Pentium">Github</a></button>
              </div>
            </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full m-2">
          <figure><Image src="https://media.sproutsocial.com/uploads/2023/07/Sentiment-analysis-HUB-Final.jpg" alt="Shoes" width={400} height={225} /></figure>
          <div className="card-body">
            <h2 className="card-title">Twitter US sentiment analysis</h2>
            <p>Analysis Twitter posts of US airline using NLP</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><a href="https://github.com/Sans11Pentium">Github</a></button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">More Projects</h2>
            <p>For more projects do visit my Github profile</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><a href="https://github.com/Sans11Pentium">Go Now</a></button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  